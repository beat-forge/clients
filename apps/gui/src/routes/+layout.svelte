<script lang="ts">
	import '../app.postcss';
	import '../fonts.css';
	import TitleBar from '$lib/components/TitleBar.svelte';
	import SideBar from '$lib/components/SideBar.svelte';
</script>

<div
	class="beatforge-client-app-wrapper h-full w-full overflow-hidden rounded-lg border-2 border-[#121212] bg-gradient-to-r from-black-800 to-black-950"
>
	<div class="beatforge-client-layout flex h-full w-full flex-row min-w-0">
		<SideBar />
		<div class="beatforge-client-content flex h-full w-full flex-col min-w-0">
			<TitleBar />
			<div class="flex flex-col h-full w-full overflow-y-auto pl-6 pr-4 pb-6 min-w-0">
				<slot />
			</div>
		</div>
	</div>

	<!-- app backdrop glow -->
	<div
		aria-hidden="true"
		class="fixed top-0 left-0 w-full h-full overflow-visible bg-gradient-to-b from-[#4712B6] to-[#954C81] opacity-[0.04] pointer-events-none select-none sidebar-glow"
	/>
</div>
