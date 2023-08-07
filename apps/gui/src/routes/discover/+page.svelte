<script lang="ts">
	import Mod from '$lib/components/Mod.svelte';
	import SearchBar from '$lib/components/SearchBar.svelte';
	import FilterPill from '$lib/components/FilterPill.svelte';

	import type { PageData } from './$types';
	export let data: PageData;
</script>

<p class="brand-font mb-1 text-xs font-semibold uppercase tracking-widest text-gray-400 opacity-75 z-[2]">
	Welcome to BeatForge
</p>
<h1 class="brand-font mb-6 text-lg font-extrabold tracking-wide text-white z-[2]">Discover Mods</h1>
<div class="flex min-w-0 flex-col rounded-xl bg-black-700 p-4">
	<!-- searchbar -->
	<SearchBar />
	<!-- icon -->
	<div class="mb-6 mt-3 flex flex-row gap-2">
		<!-- filter -->
		<FilterPill icon="filter" option="All" />
		<FilterPill icon="verified" option="Verified" />
	</div>

	<div class="w-full overflow-hidden gap-4">
		{#each data.mods as mod}
			<Mod
				name={mod.name}
				description={mod.description}
				author={mod.author.username}
				icon={mod.icon}
				category={mod.category.name}
				verified={mod.verified}
			/>
		{:else}
			<p class="text-white">No mods found</p>
		{/each}
	</div>
</div>
