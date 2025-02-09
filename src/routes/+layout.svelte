<script lang="ts">
	import Footer from '$lib/components/shared/footer.svelte';
	import Header from '$lib/components/shared/header.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<div class="px-4">
	<Header />
	{@render children()}
	<Footer />
</div>
