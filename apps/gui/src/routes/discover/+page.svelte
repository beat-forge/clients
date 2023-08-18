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
</script>

<div class="w-full px-6 mx-auto max-w-7xl">
	<div class="beatforge-discover-header-wrapper">
		<h1 class="relative z-[2] mt-4 max-w-[700px] text-4xl font-black leading-[1.25] tracking-wide">
			Discover
		</h1>
	</div>

	<div class="flex flex-row gap-4 mt-4 beatforge-discover-filter-wrapper">
		<div
			class="relative flex flex-row items-center w-full overflow-hidden rounded-md bg-primary-800 text-primary-50"
		>
			<SearchIcon customClasses="w-4 h-4 absolute left-4 z-10 select-none pointer-events-none" />
			<input
				on:input={searchMore}
				bind:value={searchValue}
				class="flex flex-row items-center w-full gap-2 py-3 pl-12"
				placeholder="Search for mods"
			/>
		</div>

		<div
			class="relative flex flex-row items-center overflow-hidden rounded-md bg-primary-800 w-14 md:w-2/5"
		>
			<div
				class="absolute hidden -translate-y-1/2 pointer-events-none select-none right-4 top-1/2 md:block"
			>
				<ChevronDownIcon customClasses="w-4 h-4 z-10 select-none pointer-events-none" />
			</div>
			<div
				class="absolute block -translate-y-1/2 pointer-events-none select-none right-4 top-1/2 md:hidden"
			>
				<FilterIcon customClasses="w-4 h-4 z-10 select-none pointer-events-none" />
			</div>
			<select
				class="flex flex-row items-center w-full gap-2 py-3 pl-4 pr-12"
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
			class="relative flex flex-row items-center overflow-hidden rounded-md bg-primary-800 w-14 md:w-1/5"
		>
			<div
				class="absolute hidden -translate-y-1/2 pointer-events-none select-none right-4 top-1/2 md:block"
			>
				<ChevronDownIcon customClasses="w-4 h-4 z-10 select-none pointer-events-none" />
			</div>
			<div
				class="absolute block -translate-y-1/2 pointer-events-none select-none right-4 top-1/2 md:hidden"
			>
				<FilterIcon customClasses="w-4 h-4 z-10 select-none pointer-events-none" />
			</div>
			<select
				class="px-4 py-1 text-xs font-bold rounded-md bg-primary-800"
				bind:value={gameVersion}
				on:change={searchMore}
			>
				{#each ['1.28.0', '1.27.0'] as version}
					<option value={version}>Version: {version}</option>
				{/each}
			</select>
		</div>
	</div>

	<div class="flex mt-4 text-xs font-bold md:hidden">
		Sorting by<span class="ml-1 text-[#875CEF]">{getSortLabel(sort)}</span>
	</div>
	<div class="relative mt-4 overflow-hidden beatforge-discover-list-items-wrapper rounded-b-md">
		{#if existingData.length > 0}
			{#each existingData as mod}
				{#key existingData.length}
					<ModListItem
						name={mod.name}
						slug={mod.slug}
						author={mod.author.username}
						description={mod.description}
						category={mod.category}
						downloads={mod.stats.downloads}
						icon={mod.icon}
					/>
				{/key}
			{/each}
		{:else}
			<p class="text-center text-primary-300">No mods found</p>
		{/if}

		<div class="mt-4 text-xs font-black text-primary-300">
			<p>Total Mods: {totalHits}</p>
		</div>

		<div bind:this={scroll_end} class="absolute bottom-[900px] h-1 w-1"></div>
	</div>
</div>
