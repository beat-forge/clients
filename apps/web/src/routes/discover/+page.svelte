<script lang="ts">
	// import Search from '$lib/components/icons/search.svelte';
	import {
		SearchIcon,
		ChevronDownIcon,
		ArrowSmallLeftIcon,
		ArrowSmallRightIcon,
		FilterIcon
	} from 'ui/icons';
	import { Button } from 'ui/button';

	import VirtualList from 'svelte-tiny-virtual-list';
	import ModListItem from '$lib/components/ModListItem.svelte';
	import { onMount } from 'svelte';
	import { getContextClient, gql, queryStore } from '@urql/svelte';

	enum Sort {
		Newest = 'CREATED_AT_DESC',
		Oldest = 'CREATED_AT_ASC',
		MostPopular = 'DOWNLOADS_DESC',
		LeastPopular = 'DOWNLOADS_ASC'
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

	let listHeight;
	let data: any[] = [];
	let sort = Sort.Newest;
	let totalPages = 1;
	let totalHits = 0;
	let currentPage = 1;
	let searchValue: string = '';
	
	$: search = queryStore({
		client: getContextClient(),
		query:gql`
			query ($q: String!, $page: Int!, $_sort: Sort) {
				searchMods(query: $q, pageSize: 5, page: $page, sort: $_sort) {
					hits {
						result {
							name
							slug
							description
							category
							icon
							author {
								username
							}
							stats {
								downloads
							}
							updatedAt
						}
						rankingScore
					}
					totalPages
					totalHits
				}
			}
		`,
		variables: {
			q: searchValue,
			page: currentPage,
			_sort: {
				sort: sort.toString()
			},
			// filters: {
			// 	category: cateFilter,
			// 	version: verFilter
			// }
		}
	})

	// const searchOnInput = async (e: any) => {
	// 	await search(<String>(<HTMLInputElement>e.target).value);
	// 	searchValue = e.target.value;
	// 	currentPage = 1;
	// };
	// const onSortChange = async () => {
	// 	await search('');
	// 	currentPage = 1;
	// };
	$: {
		data = (<any[]>$search.data?.searchMods.hits).sort((a, b) => b.rankingScore - a.rankingScore).map((mod: any) => mod.result) ?? [];
		totalPages = $search.data?.searchMods.totalPages ?? 1;
		totalHits = $search.data?.searchMods.totalHits ?? 0;
	}

	// $: {
	// 	if (searchValue) {
	// 		data = [];
	// 		totalPages = 1;
	// 		totalHits = 0;
	// 		currentPage = 1;
	// 	}
	// }
	// onMount(async () => {
	// 	await search('');
	// });
</script>

<div class="w-full max-w-7xl px-6 mx-auto">
	<div class="beatforge-discover-header-wrapper">
		<h1 class="max-w-[700px] text-5xl font-black leading-[1.25] tracking-wide mt-4">Discover</h1>
	</div>

	<div class="beatforge-discover-filter-wrapper flex flex-row gap-4 mt-4">
		<div
			class="relative flex w-full flex-row items-center overflow-hidden rounded-md bg-primary-800 text-primary-50"
		>
			<SearchIcon customClasses="w-4 h-4 absolute left-4 z-10 select-none pointer-events-none" />
			<input
				bind:value={searchValue}
				class="flex w-full flex-row items-center gap-2 py-3 pl-12"
				placeholder="Search for mods"
			/>
		</div>

		<div
			class="relative flex w-14 md:w-2/5 flex-row items-center overflow-hidden rounded-md bg-primary-800"
		>
			<div
				class="absolute right-4 top-1/2 -translate-y-1/2 hidden md:block select-none pointer-events-none"
			>
				<ChevronDownIcon customClasses="w-4 h-4 z-10 select-none pointer-events-none" />
			</div>
			<div
				class="absolute right-4 top-1/2 -translate-y-1/2 block md:hidden select-none pointer-events-none"
			>
				<FilterIcon customClasses="w-4 h-4 z-10 select-none pointer-events-none" />
			</div>
			<select
				class="flex w-full flex-row items-center gap-2 py-3 pl-4 pr-12"
				bind:value={sort}
			>
				<option value={Sort.Newest}>Newest</option>
				<option value={Sort.Oldest}>Oldest</option>
				<option value={Sort.MostPopular}>Most popular</option>
				<option value={Sort.LeastPopular}>Least popular</option>
			</select>
		</div>
	</div>

	<div class="pagination bg-primary-800 mt-4 rounded-md flex justify-center p-2">
		<div class="flex overflow-hidden rounded-full">
			<Button
				variant="unset"
				on:click={() => {
					currentPage--;
				  }}
				disabled={currentPage === 1}
				customClasses="px-3 py-1 rounded-none bg-primary-850 hover:bg-primary-900 text-md font-bold"
			>
				<ArrowSmallLeftIcon customClasses="w-4 h-4" />
			</Button>

			{#if totalPages <= 5}
				{#each Array(totalPages) as _, i}
					<Button
						variant="unset"
						on:click={() => {
							currentPage = i + 1;
						}}
						disabled={currentPage === i + 1}
						customClasses="px-3 py-1 rounded-none bg-primary-850 hover:bg-primary-900 text-md font-bold"
					>
						{i + 1}
					</Button>
				{/each}
			{:else if currentPage <= 2}
				{#each Array(4) as _, i}
					<Button
						variant="unset"
						on:click={() => {
							currentPage = i + 1;
						  }}
						disabled={currentPage === i + 1}
						customClasses="px-3 py-1 rounded-none bg-primary-850 hover:bg-primary-900 text-md font-bold"
					>
						{i + 1}
					</Button>
				{/each}
				<Button
					variant="unset"
					customClasses="px-3 py-1 rounded-none bg-primary-850 hover:bg-primary-900 text-md font-bold"
				>
					...
				</Button>
				<Button
					variant="unset"
					on:click={() => {
						currentPage = totalPages;
					  }}
					customClasses="px-3 py-1 rounded-none bg-primary-850 hover:bg-primary-900 text-md font-bold"
				>
					{totalPages}
				</Button>
			{:else if currentPage >= totalPages - 2}
				<Button
					variant="unset"
					on:click={() => {
						currentPage = 1;
					  }}
					customClasses="px-3 py-1 rounded-none bg-primary-850 hover:bg-primary-900 text-md font-bold"
				>
					1
				</Button>
				<Button
					variant="unset"
					customClasses="px-3 py-1 rounded-none bg-primary-850 hover:bg-primary-900 text-md font-bold"
				>
					...
				</Button>
				{#each Array(4) as _, i}
					<Button
						variant="unset"
						on:click={() => {
							currentPage = totalPages - 3 + i;
						  }}
						disabled={currentPage === totalPages - 3 + i}
						customClasses="px-3 py-1 rounded-none bg-primary-850 hover:bg-primary-900 text-md font-bold"
					>
						{totalPages - 3 + i}
					</Button>
				{/each}
			{:else}
				<Button
					variant="unset"
					on:click={() => {
						currentPage = 1;
					  }}
					customClasses="px-3 py-1 rounded-none bg-primary-850 hover:bg-primary-900 text-md font-bold"
				>
					1
				</Button>
				<Button
					variant="unset"
					customClasses="px-3 py-1 rounded-none bg-primary-850 hover:bg-primary-900 text-md font-bold"
				>
					...
				</Button>
				{#each Array(2) as _, i}
					<Button
						variant="unset"
						on:click={() => {
							currentPage = currentPage - 1 + i;
						  }}
						disabled={currentPage === currentPage - 1 + i}
						customClasses="px-3 py-1 rounded-none bg-primary-850 hover:bg-primary-900 text-md font-bold"
					>
						{currentPage - 1 + i}
					</Button>
				{/each}
				<Button
					variant="unset"
					on:click={() => {
						currentPage = totalPages;
					  }}
					customClasses="px-3 py-1 rounded-none bg-primary-850 hover:bg-primary-900 text-md font-bold"
				>
					...
				</Button>
				<Button
					variant="unset"
					on:click={() => {
						currentPage = totalPages;
					  }}
					customClasses="px-3 py-1 rounded-none bg-primary-850 hover:bg-primary-900 text-md font-bold"
				>
					{totalPages}
				</Button>
			{/if}

			<Button
				variant="unset"
				on:click={() => {
					currentPage++;
				  }}
				disabled={currentPage === totalPages}
				customClasses="px-3 py-1 rounded-none bg-primary-850 hover:bg-primary-900 text-md font-bold"
			>
				<ArrowSmallRightIcon customClasses="w-4 h-4" />
			</Button>
		</div>
	</div>
	<!-- end pagination -->

	<div class="flex md:hidden mt-4 text-xs font-bold">
		Sorting by<span class="text-[#875CEF] ml-1">{getSortLabel(sort)}</span>
	</div>
	<div class="beatforge-discover-list-items-wrapper mt-4 overflow-hidden rounded-md">
		{#if data.length != 0}
			{#each data as mod}
				<ModListItem
					name={mod.name}
					slug={mod.slug}
					author={mod.author.username}
					description={mod.description}
					category={mod.category}
					downloads={mod.stats.downloads}
					updatedAt={mod.updatedAt}
					icon={mod.icon}
				/>
			{/each}
		{:else}
			<p class="text-center text-primary-300">No mods found</p>
		{/if}
	</div>
	<div class="mt-4 font-black text-xs text-primary-300">
		<p>Total Mods: {totalHits}</p>
	</div>
</div>
