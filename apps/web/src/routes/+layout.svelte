<script lang="ts">
	import '../app.postcss';
	import '../fonts.css';
	import './styles.css';

	import Footer from '$lib/components/layout/Footer.svelte';
	import NavBar from '$lib/components/layout/NavBar.svelte';
	import NavBarDisclaimer from '$lib/components/layout/NavBarDisclaimer.svelte';
	import PageTransition from '$lib/components/PageTransition.svelte';

	import type { LayoutServerData } from './$types';
	export let data: LayoutServerData;
</script>

<NavBarDisclaimer />
<main class="beatforge-page-layout relative w-full h-full">
	<div class="beatforge-page-content-wrapper relative flex flex-col items-center w-full h-full">
		<NavBar />
		<PageTransition pathname={data.pathname}>
			<slot />
		</PageTransition>
		<Footer />
	</div>
</main>