<script>
    import { resolve } from "$app/paths";

    let { data } = $props();

    const restaurant = $derived(data.restaurant);
    const details = $derived(data.details);

    const currentYear = new Date().getFullYear();

    const unconfirmed = "Not publicly confirmed";

    // Contact details, hours and booking can't exist for a closed restaurant.
    const missing = $derived(
        details.status === "closed" ? "Not available (closed)" : unconfirmed,
    );

    const yearsInBusiness = $derived(
        details.sinceYear ? currentYear - details.sinceYear : null,
    );

    const statusLabels = {
        closed: "Permanently closed",
        moved: "Moved or changed",
        unclear: "Status unclear",
        unknown: "Could not be verified",
    };

    function stars(rating) {
        const full = Math.floor(rating);
        const half = rating - full >= 0.5;
        return "★".repeat(full) + (half ? "½" : "");
    }

    /** @param {string} phone */
    function telHref(phone) {
        return "tel:" + phone.replace(/[^\d+]/g, "");
    }

    /** @param {string} url */
    function isExternal(url) {
        return url.startsWith("http");
    }
</script>

<svelte:head>
    <title>{restaurant.title} · Stockholm Restaurant Guide</title>
    <meta name="description" content={details.intro} />
</svelte:head>

<main class="page">
    <a class="back" href={resolve("/")}>← All restaurants</a>

    <header class="header">
        <p class="eyebrow">{restaurant.area} · {restaurant.cuisine}</p>
        <h1>{restaurant.title}</h1>
        <p class="rating" title="{restaurant.rating} out of 5">
            <span class="stars" aria-hidden="true"
                >{stars(restaurant.rating)}</span
            >
            <span class="score">{restaurant.rating.toFixed(1)}</span>
        </p>
    </header>

    {#if details.status !== "open"}
        <aside class="banner banner-{details.status}" role="note">
            <strong>{statusLabels[details.status]}</strong>
            <p>{details.statusNote}</p>
        </aside>
    {/if}

    <p class="intro">{details.intro}</p>

    <div class="layout">
        <section class="panel" aria-labelledby="hours-h">
            <h2 id="hours-h">Opening hours</h2>
            {#if details.hours}
                <dl class="hours">
                    {#each details.hours as row (row.days)}
                        <div class="hours-row">
                            <dt>{row.days}</dt>
                            <dd>{row.time}</dd>
                        </div>
                    {/each}
                </dl>
            {:else}
                <p class="missing">{missing}</p>
            {/if}
            {#if details.hoursNote}
                <p class="note">{details.hoursNote}</p>
            {/if}
        </section>

        <section class="panel" aria-labelledby="best-h">
            <h2 id="best-h">Best sellers</h2>
            {#if details.bestSellers}
                <ol class="best">
                    {#each details.bestSellers as item (item)}
                        <li>{item}</li>
                    {/each}
                </ol>
            {:else}
                <p class="missing">{unconfirmed}</p>
            {/if}
            <p class="note">
                {details.bestSellersNote ??
                    "Restaurants don’t publish sales data, so this is based on signature dishes and what guests mention most."}
            </p>
        </section>

        <section class="panel" aria-labelledby="about-h">
            <h2 id="about-h">Ownership &amp; history</h2>
            <dl class="facts">
                <dt>Owner</dt>
                <dd>{details.owner ?? unconfirmed}</dd>

                <dt>In business</dt>
                <dd>
                    {#if yearsInBusiness !== null && details.status !== "closed"}
                        {yearsInBusiness} years (since {details.sinceYear})
                        {#if details.sinceText}
                            <span class="note block">{details.sinceText}</span>
                        {/if}
                    {:else if details.sinceText}
                        {details.sinceText}
                    {:else}
                        {unconfirmed}
                    {/if}
                </dd>
            </dl>
        </section>

        <section class="panel" aria-labelledby="contact-h">
            <h2 id="contact-h">Contact &amp; booking</h2>
            <dl class="facts">
                <dt>Address</dt>
                <dd>{details.address ?? missing}</dd>

                <dt>Phone</dt>
                <dd>
                    {#if details.phone}
                        <a href={telHref(details.phone)}>{details.phone}</a>
                        {#if details.phoneNote}
                            <span class="note block">{details.phoneNote}</span>
                        {/if}
                    {:else}
                        {missing}
                        {#if details.phoneNote}
                            <span class="note block">{details.phoneNote}</span>
                        {/if}
                    {/if}
                </dd>

                <dt>Website</dt>
                <dd>
                    {#if details.website}
                        <a
                            href={details.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            >{details.website
                                .replace(/^https?:\/\//, "")
                                .replace(/\/$/, "")}</a
                        >
                    {:else}
                        {missing}
                    {/if}
                </dd>
            </dl>

            {#if details.booking}
                <a
                    class="button"
                    href={details.booking.url}
                    target={isExternal(details.booking.url)
                        ? "_blank"
                        : undefined}
                    rel={isExternal(details.booking.url)
                        ? "noopener noreferrer"
                        : undefined}
                >
                    {details.booking.label ?? "Book a table"}
                </a>
                {#if details.booking.note}
                    <p class="note">{details.booking.note}</p>
                {/if}
            {:else}
                <p class="missing">
                    {details.status === "closed"
                        ? "Booking is not available (closed)."
                        : "No booking link confirmed."}
                </p>
                {#if details.bookingNote}
                    <p class="note">{details.bookingNote}</p>
                {/if}
            {/if}
        </section>
    </div>
</main>

<style>
    .page {
        max-width: 960px;
        margin: 0 auto;
        padding: 2rem 1.5rem 5rem;
    }

    .back {
        display: inline-block;
        margin-bottom: 1.5rem;
        font-size: 0.9rem;
        color: #a2a9b8;
        text-decoration: none;
    }

    .back:hover,
    .back:focus-visible {
        color: #f0a04b;
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
        font-size: clamp(2rem, 5vw, 3.25rem);
        line-height: 1.05;
        letter-spacing: -0.02em;
    }

    .rating {
        display: inline-flex;
        align-items: baseline;
        gap: 0.4rem;
        margin: 0.75rem 0 0;
    }

    .stars {
        color: #f0a04b;
        letter-spacing: 0.05em;
    }

    .score {
        font-variant-numeric: tabular-nums;
        color: #a2a9b8;
    }

    .banner {
        margin: 1.5rem 0 0;
        padding: 1rem 1.25rem;
        border: 1px solid #5a4a1c;
        border-left-width: 4px;
        border-radius: 12px;
        background: #231e0f;
    }

    .banner strong {
        font-size: 0.8rem;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: #f0c14b;
    }

    .banner p {
        margin: 0.4rem 0 0;
        font-size: 0.92rem;
        line-height: 1.6;
        color: #d4cbb0;
    }

    .banner-closed {
        border-color: #6b2a2a;
        background: #231214;
    }

    .banner-closed strong {
        color: #ff8a8a;
    }

    .banner-closed p {
        color: #dcc3c3;
    }

    .intro {
        max-width: 62ch;
        margin: 1.5rem 0 0;
        font-size: 1.1rem;
        line-height: 1.65;
        color: #c3c9d6;
    }

    .layout {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1.25rem;
        margin-top: 2rem;
    }

    .panel {
        padding: 1.4rem;
        border: 1px solid #22262f;
        border-radius: 16px;
        background: linear-gradient(180deg, #171a21 0%, #14171d 100%);
    }

    h2 {
        margin: 0 0 1rem;
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: #7d8595;
    }

    dl,
    dd {
        margin: 0;
    }

    .hours-row {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        padding: 0.45rem 0;
        border-bottom: 1px solid #1f242e;
        font-size: 0.95rem;
    }

    .hours-row:last-child {
        border-bottom: 0;
    }

    .hours-row dt {
        color: #a2a9b8;
    }

    .hours-row dd {
        text-align: right;
        font-variant-numeric: tabular-nums;
    }

    .best {
        margin: 0;
        padding-left: 1.25rem;
        font-size: 0.98rem;
        line-height: 1.8;
    }

    .best li::marker {
        color: #f0a04b;
        font-weight: 600;
    }

    .facts {
        display: grid;
        gap: 0.2rem;
    }

    .facts dt {
        margin-top: 0.85rem;
        font-size: 0.72rem;
        font-weight: 600;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: #7d8595;
    }

    .facts dt:first-child {
        margin-top: 0;
    }

    .facts dd {
        font-size: 0.95rem;
        line-height: 1.55;
    }

    a {
        color: #f0a04b;
        text-underline-offset: 2px;
    }

    .missing {
        margin: 0;
        font-style: italic;
        color: #7d8595;
    }

    .note {
        margin: 0.75rem 0 0;
        font-size: 0.8rem;
        line-height: 1.5;
        color: #7d8595;
    }

    .note.block {
        display: block;
        margin-top: 0.25rem;
    }

    .button {
        display: inline-block;
        margin-top: 1.1rem;
        padding: 0.7rem 1.2rem;
        border-radius: 10px;
        background: #f0a04b;
        color: #1a1204;
        font-weight: 600;
        text-decoration: none;
    }

    .button:hover,
    .button:focus-visible {
        background: #ffb866;
    }

    @media (max-width: 720px) {
        .layout {
            grid-template-columns: 1fr;
        }
    }
</style>
