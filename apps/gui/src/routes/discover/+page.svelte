<script lang="ts">
	import { SearchIcon, ChevronDownIcon, FilterIcon } from 'ui/icons';
	import ModListItem from '$lib/components/ModListItem.svelte';
	import { onMount } from 'svelte';

	enum Sort {
		Newest = 'created_at:desc',
		Oldest = 'created_at:asc',
		MostPopular = 'stats.downloads:desc',
		LeastPopular = 'stats.downloads:asc'
	}

	function getSortLabel(sortValue: string): string {
		switch (sortValue) {
			case Sort.Newest:
				return 'Newest';
			case Sort.Oldest:
				return 'Oldest';
			case Sort.MostPopular:
				return 'Most Popular';
			case Sort.LeastPopular:
				return 'Least Popular';
			default:
				return sortValue;
		}
	}

	let scroll_end: HTMLElement;
	let data: any[] = [];
	let existingData: any[] = [];

	$: sort = Sort.Newest;
	$: searchValue = '';
	$: currentPage = 1;
	$: totalPages = 1;
	$: totalHits = 0;
	$: gameVersion = '1.28.0';

	const search = async (q: String) => {
		const res = await (
			await fetch(
				`https://search.beatforge.net/indexes/${import.meta.env.MEILI_PREFIX}_mods/search`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						'Access-Control-Allow-Origin': '*',
						Authorization:
							'Bearer ' + '1bb9363429a821bb444c459fe529505de0c9985a6abb6802c1849797b4ae316b'
					},
					body: JSON.stringify({
						q: q,
						sort: [sort.toString()],
						page: currentPage,
						filter: [[`supported_versions = ${gameVersion}`]]
					})
				}
			)
		).json();

		data = res.hits;
		data = data;
		totalHits = res.totalHits;
		totalPages = res.totalPages;

		if (currentPage === 1) {
			existingData = data;
		} else {
			existingData = existingData.concat(data);
		}
	};

	const searchMore = async () => {
		await search(searchValue);
		currentPage = 1;
	};

	onMount(async () => {
		await searchMore();

		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					if (currentPage < totalPages) {
						currentPage++;
						search(searchValue);
					}
				}
			},
			{
				root: null,
				rootMargin: '0px',
				threshold: 1.0
			}
		);

		observer.observe(scroll_end);
	});

	$: selectedMods = [] as any;

	// Event handler to log selected mod items
	const logSelectedMods = () => {
		console.log(selectedMods);
	};

	// Listen for selection change events from ModListItem components
	const handleSelectionChange = (event: any) => {
    const { slug, selected } = event.detail;
    const modIndex = existingData.findIndex((mod) => mod.slug === slug);

    if (modIndex !== -1) {
        if (selected) {
            selectedMods.push(existingData[modIndex]);
        } else {
            selectedMods.splice(selectedMods.findIndex((mod) => mod.slug === slug), 1);
        }

        // Update the selected property in the mod object
        existingData[modIndex].selected = selected;
    }

    console.log(selectedMods);
};
</script>

<div class="mx-auto w-full px-6">
	<div class="beatforge-discover-header-wrapper">
		<h1 class="relative z-[2] mt-4 max-w-[700px] text-4xl font-black leading-[1.25] tracking-wide">
			Discover
		</h1>

		<div class="text-primary-300 mt-4 text-xs font-black">
			<p>Total Mods: {totalHits}</p>
		</div>
	</div>

	<div class="beatforge-discover-filter-wrapper sticky top-4 z-[2] mt-4 flex flex-row gap-4">
		<div
			class="bg-primary-800 text-primary-50 relative flex w-full flex-row items-center overflow-hidden rounded-md"
		>
			<SearchIcon customClasses="w-4 h-4 absolute left-4 z-10 select-none pointer-events-none" />
			<input
				on:input={searchMore}
				bind:value={searchValue}
				class="flex w-full flex-row items-center gap-2 py-3 pl-12"
				placeholder="Search for mods"
			/>
		</div>

		<div
			class="bg-primary-800 relative flex min-w-[33%] flex-row items-center overflow-hidden rounded-md"
		>
			<div
				class="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 select-none md:block"
			>
				<ChevronDownIcon customClasses="w-4 h-4 z-10 select-none pointer-events-none" />
			</div>
			<div
				class="pointer-events-none absolute right-4 top-1/2 block -translate-y-1/2 select-none md:hidden"
			>
				<FilterIcon customClasses="w-4 h-4 z-10 select-none pointer-events-none" />
			</div>
			<select
				class="flex w-full flex-row items-center gap-2 py-3 pl-4 pr-12"
				bind:value={sort}
				on:change={searchMore}
			>
				<option value={Sort.Newest}>Newest</option>
				<option value={Sort.Oldest}>Oldest</option>
				<option value={Sort.MostPopular}>Most popular</option>
				<option value={Sort.LeastPopular}>Least popular</option>
			</select>
		</div>

		<div
			class="bg-primary-800 relative flex min-w-[33%] flex-row items-center overflow-hidden rounded-md"
		>
			<div
				class="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 select-none md:block"
			>
				<ChevronDownIcon customClasses="w-4 h-4 z-10 select-none pointer-events-none" />
			</div>
			<div
				class="pointer-events-none absolute right-4 top-1/2 block -translate-y-1/2 select-none md:hidden"
			>
				<FilterIcon customClasses="w-4 h-4 z-10 select-none pointer-events-none" />
			</div>
			<select
				class="flex w-full flex-row items-center gap-2 py-3 pl-4 pr-12"
				bind:value={gameVersion}
				on:change={searchMore}
			>
				{#each ['1.28.0', '1.27.0'] as version}
					<option value={version}>Version: {version}</option>
				{/each}
			</select>
		</div>
	</div>

	<div class="mt-4 flex text-xs font-bold md:hidden">
		Sorting by<span class="ml-1 text-[#875CEF]">{getSortLabel(sort)}</span>
	</div>

	<button on:click={logSelectedMods}>Log Selected Mods</button>

	<div class="beatforge-discover-list-items-wrapper relative mt-4">
		{#if existingData.length > 0}
			{#each existingData as mod (mod.slug)}
				{#key existingData.length}
					<ModListItem
						name={mod.name}
						slug={mod.slug}
						author={mod.author.username}
						description={mod.description}
						category={mod.category}
						downloads={mod.stats.downloads}
						icon={mod.icon}
						selected={mod.selected}
						on:selectionChange={handleSelectionChange}
					/>
				{/key}
			{/each}
		{:else}
			<p class="text-primary-300 text-center">No mods found</p>
		{/if}

		<div bind:this={scroll_end} class="absolute bottom-[900px] h-1 w-1"></div>
	</div>
</div>
