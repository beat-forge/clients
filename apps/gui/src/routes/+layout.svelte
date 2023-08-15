<script lang="ts">
	import '../app.postcss';
	import '../fonts.css';
	import TitleBar from '$lib/components/TitleBar.svelte';
	import SideBar from '$lib/components/SideBar.svelte';
</script>

<div
	class="beatforge-client-app-wrapper h-full w-full overflow-hidden rounded-lg border-2 border-[#121212] bg-primary-950"
>
	<div class="flex flex-row w-full h-full min-w-0 beatforge-client-layout">
		<SideBar />
		<div class="flex flex-col w-full h-full min-w-0 beatforge-client-content">
			<TitleBar />
			<div class="flex flex-col w-full h-full min-w-0 pb-6 pl-6 pr-4 overflow-y-auto">
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
