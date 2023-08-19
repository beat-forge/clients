<script lang="ts">
	import '../app.postcss';
	import '../fonts.css';
	import TitleBar from '$lib/components/TitleBar.svelte';
	import SideBar from '$lib/components/SideBar.svelte';
</script>

<div
	class="beatforge-client-app-wrapper bg-primary-950 h-full w-full overflow-hidden rounded-lg border-2 border-[#121212]"
>
	<div class="beatforge-client-layout flex h-full w-full min-w-0 flex-row">
		<SideBar />
		<div class="beatforge-client-content flex h-full w-full min-w-0 flex-col">
			<TitleBar />
			<div class="flex h-full w-full min-w-0 flex-col overflow-y-auto pb-6 pl-6 pr-4">
				<slot />
			</div>
		</div>
	</div>

	<!-- app backdrop glow -->
	<div
		aria-hidden="true"
		class="sidebar-glow pointer-events-none fixed left-0 top-0 z-[3] h-full w-full select-none overflow-visible bg-gradient-to-b from-[#4712B6] to-[#954C81] opacity-[0.03]"
	/>
</div>
