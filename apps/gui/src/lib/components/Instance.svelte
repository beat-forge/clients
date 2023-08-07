<script lang="ts">
	import { page } from '$app/stores';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	export let name: string;
	export let version: string;
	export let active: boolean;

	$: activeUrl = $page.url.pathname;
</script>

<div class="brand-font mb-2 flex flex-col">
	<!-- navigation -->
	<button
		on:click={() => (active = !active)}
		class="flex flex-row items-center justify-between rounded-md px-3 py-2 transition-all duration-[80ms]"
		style={active
			? 'background: rgba(255, 255, 255, 33%); box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.25);'
			: 'background: unset; box-shadow: unset;'}
	>
		<!-- name of instance (user customizable) -->
		<p>{name}</p>
		<div class="text-xs font-semibold opacity-75">{version}</div>
	</button>

	<!-- if item is acitve and selected -->
	{#if active}
		<div
			class="mb-3 flex flex-col"
			transition:slide={{ delay: 0, duration: 300, easing: quintOut, axis: 'y' }}
		>
			<a
				class:linkActive={activeUrl === `/discover/${version}`}
				href={`/discover/${version}`}
				class="flex flex-row items-center gap-4 px-3 py-2 pt-4 opacity-50 transition-all"
			>
				<div class="h-[4px] w-[4px] rounded-full bg-white" />
				<div class="tracking-wide">Discover Mods</div>
			</a>

			<div
				class:linkActive={activeUrl === '/installed'}
				class="flex flex-row items-center gap-4 px-3 py-2 opacity-50 transition-all"
			>
				<div class="h-[4px] w-[4px] rounded-full bg-white" />
				<p class="tracking-wide">Installed Mods</p>
			</div>
		</div>
	{/if}
</div>
