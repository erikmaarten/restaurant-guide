<script>
    import { restaurants } from "#lib/restaurants";

    let query = $state("");
    let cuisine = $state("All");
    let sort = $state("rating");

    const cuisines = [
        "All",
        ...new Set(restaurants.map((r) => r.cuisine)),
    ].sort((a, b) => (a === "All" ? -1 : b === "All" ? 1 : a.localeCompare(b)));

    const filtered = $derived(
        restaurants
            .filter((r) => cuisine === "All" || r.cuisine === cuisine)
            .filter((r) => {
                const q = query.trim().toLowerCase();
                if (!q) return true;
                return (
                    r.title.toLowerCase().includes(q) ||
                    r.description.toLowerCase().includes(q) ||
                    r.area.toLowerCase().includes(q) ||
                    r.cuisine.toLowerCase().includes(q)
                );
            })
            .sort((a, b) =>
                sort === "rating"
                    ? b.rating - a.rating
                    : a.title.localeCompare(b.title, "sv"),
            ),
    );

    const average = $derived(
        restaurants.reduce((sum, r) => sum + r.rating, 0) / restaurants.length,
    );

    function stars(rating) {
        const full = Math.floor(rating);
        const half = rating - full >= 0.5;
        return "★".repeat(full) + (half ? "½" : "");
    }
</script>

<svelte:head>
    <title>Stockholm Restaurant Guide</title>
    <meta
        name="description"
        content="20 hand-picked restaurant recommendations across the Stockholm area."
    />
</svelte:head>

<header class="hero">
    <p class="eyebrow">Stockholm area</p>
    <h1>Restaurant Guide</h1>
    <p class="lede">
        Twenty hand-picked places to eat, from three-star tasting menus to
        late-night ramen. Average rating <strong>{average.toFixed(1)}</strong>
        across {restaurants.length} restaurants.
    </p>
</header>

<section class="controls" aria-label="Filter and sort restaurants">
    <label class="field">
        <span>Search</span>
        <input
            type="search"
            bind:value={query}
            placeholder="Name, area, cuisine…"
            autocomplete="off"
        />
    </label>

    <label class="field">
        <span>Cuisine</span>
        <select bind:value={cuisine}>
            {#each cuisines as c (c)}
                <option value={c}>{c}</option>
            {/each}
        </select>
    </label>

    <label class="field">
        <span>Sort by</span>
        <select bind:value={sort}>
            <option value="rating">Highest rating</option>
            <option value="title">Name (A–Z)</option>
        </select>
    </label>
</section>

<p class="count" aria-live="polite">
    Showing {filtered.length} of {restaurants.length}
</p>

{#if filtered.length === 0}
    <p class="empty">No restaurants match your filters.</p>
{:else}
    <ul class="grid">
        {#each filtered as restaurant (restaurant.id)}
            <li class="card">
                <a class="card-link" href="/restaurant/{restaurant.id}">
                    <div class="card-head">
                        <h2>{restaurant.title}</h2>
                        <span
                            class="rating"
                            title="{restaurant.rating} out of 5"
                        >
                            <span class="stars" aria-hidden="true"
                                >{stars(restaurant.rating)}</span
                            >
                            <span class="score"
                                >{restaurant.rating.toFixed(1)}</span
                            >
                        </span>
                    </div>
                    <p class="tags">
                        <span class="tag">{restaurant.area}</span>
                        <span class="tag">{restaurant.cuisine}</span>
                    </p>
                    <p class="description">{restaurant.description}</p>
                </a>
            </li>
        {/each}
    </ul>
{/if}

<style>
    .hero {
        max-width: 1100px;
        margin: 0 auto;
        padding: 4rem 1.5rem 2rem;
    }

    .eyebrow {
        margin: 0 0 0.5rem;
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: #f0a04b;
    }

    h1 {
        margin: 0;
        font-size: clamp(2.25rem, 6vw, 3.75rem);
        line-height: 1.05;
        letter-spacing: -0.02em;
    }

    .lede {
        max-width: 46ch;
        margin: 1rem 0 0;
        font-size: 1.05rem;
        line-height: 1.6;
        color: #a2a9b8;
    }

    .lede strong {
        color: #e8eaf0;
    }

    .controls {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;
        gap: 1rem;
        max-width: 1100px;
        margin: 0 auto;
        padding: 0 1.5rem;
    }

    .field {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
    }

    .field span {
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: #7d8595;
    }

    input,
    select {
        width: 100%;
        padding: 0.7rem 0.85rem;
        border: 1px solid #262b36;
        border-radius: 10px;
        background: #171a21;
        color: inherit;
        font: inherit;
        font-size: 0.95rem;
    }

    input:focus-visible,
    select:focus-visible {
        outline: 2px solid #f0a04b;
        outline-offset: 1px;
        border-color: #f0a04b;
    }

    .count {
        max-width: 1100px;
        margin: 1.5rem auto 0;
        padding: 0 1.5rem;
        font-size: 0.85rem;
        color: #7d8595;
    }

    .empty {
        max-width: 1100px;
        margin: 2rem auto;
        padding: 0 1.5rem;
        color: #a2a9b8;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 1.25rem;
        max-width: 1100px;
        margin: 1rem auto 0;
        padding: 0 1.5rem 5rem;
        list-style: none;
    }

    .card {
        display: flex;
        border: 1px solid #22262f;
        border-radius: 16px;
        background: linear-gradient(180deg, #171a21 0%, #14171d 100%);
        transition:
            transform 0.18s ease,
            border-color 0.18s ease;
    }

    .card:hover,
    .card:focus-within {
        transform: translateY(-3px);
        border-color: yellow;
    }

    .card-link {
        display: flex;
        flex-direction: column;
        flex: 1;
        gap: 0.75rem;
        padding: 1.4rem;
        border-radius: 16px;
        color: inherit;
        text-decoration: none;
    }

    .card-link:focus-visible {
        outline: 2px solid #f0a04b;
        outline-offset: 2px;
    }

    .card-head {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        gap: 0.75rem;
    }

    h2 {
        margin: 0;
        font-size: 1.15rem;
        letter-spacing: -0.01em;
    }

    .rating {
        display: inline-flex;
        align-items: baseline;
        gap: 0.35rem;
        white-space: nowrap;
    }

    .stars {
        color: #f0a04b;
        font-size: 0.9rem;
        letter-spacing: 0.05em;
    }

    .score {
        font-size: 0.85rem;
        font-variant-numeric: tabular-nums;
        color: #a2a9b8;
    }

    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.4rem;
        margin: 0;
    }

    .tag {
        padding: 0.2rem 0.6rem;
        border-radius: 999px;
        background: #1f242e;
        font-size: 0.72rem;
        font-weight: 500;
        letter-spacing: 0.03em;
        color: #b6bdcb;
    }

    .description {
        margin: 0;
        font-size: 0.92rem;
        line-height: 1.6;
        color: #a2a9b8;
    }

    @media (max-width: 720px) {
        .controls {
            grid-template-columns: 1fr;
        }

        .hero {
            padding-top: 2.5rem;
        }
    }
</style>
