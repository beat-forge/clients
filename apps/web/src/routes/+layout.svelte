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

	import { Client, cacheExchange, fetchExchange, setContextClient } from '@urql/svelte';

	const client = new Client({
		url: `${import.meta.env.API_URL}/graphql`,
		exchanges: [cacheExchange, fetchExchange],
		fetchOptions: () => {
			return {
				headers: {
					"Access-Control-Allow-Origin": "*",
				}
			};
		}
	});

	setContextClient(client);
</script>

<!-- <NavBarDisclaimer /> -->
<main class="relative w-full h-full beatforge-page-layout">
	<div class="relative flex flex-col items-center w-full h-full beatforge-page-content-wrapper">
		<NavBar />
		<PageTransition pathname={data.pathname}>
			<slot />
		</PageTransition>
		<Footer />
	</div>
</main>