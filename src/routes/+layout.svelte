<script>
	import favicon from "#lib/assets/favicon.svg";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}

<style>
	:global(body) {
		margin: 0;
		background: #0f1115;
		color: #e8eaf0;
		font-family:
			ui-sans-serif,
			system-ui,
			-apple-system,
			"Segoe UI",
			Roboto,
			Helvetica,
			Arial,
			sans-serif;
	}

	:global(*) {
		box-sizing: border-box;
	}
</style>
