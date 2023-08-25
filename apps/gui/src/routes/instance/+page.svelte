<script lang="ts">
	import ModListItem from '$lib/components/ModListItem.svelte';
	import { onMount } from 'svelte';
	import {
		Button,
		CategoryIcon,
		ChevronDownIcon,
		ClockIcon,
		DotsIcon,
		FilterIcon,
		Pill,
		SearchIcon
	} from 'ui';
	import { currentInstance } from '$lib/stores';
	import Sugar from 'sugar';
	import { debounce } from '$lib/utils';

	$: data = [] as any[];
	$: sort = Sort.MostPopular;
	$: searchValue = '*';
	$: currentPage = 1;

	enum Sort {
		Newest = 'created_at:desc',
		Oldest = 'created_at:asc',
		MostPopular = 'stats.downloads:desc',
		LeastPopular = 'stats.downloads:asc'
	}

	const search = async (q: String, reset: boolean = false) => {
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
						sort: [sort?.toString() ?? Sort.MostPopular.toString()],
						page: currentPage,
						hitsPerPage: 20,
						filter: [[`supported_versions = ${$currentInstance?.version}`]]
					})
				}
			)
		).json();

		if (reset) {
			currentPage = 1;
			data = [];
		}

		if (res.hits.length > 0) {
			data = [...data, ...res.hits];
		}
	};

	const scrollSearch = async () => {
		currentPage++;
		await search(searchValue);
	};

	const textSearch = async (e: Event) => {
		currentPage = 1;
		searchValue = (e.target as HTMLInputElement).value;
		await search(searchValue, true);
	};

	$: {
		if ($currentInstance) {
			search('*', true);
		}
	}

	// TODO: Scrolling position is not set correctly when loading more items
	onMount(async () => {
		document.getElementById('scroll')!.onscroll = function (e: any) {
			let element = e.target as HTMLDivElement;

			let reachedBottom = element.scrollHeight - element.scrollTop === element.clientHeight;
			let percentage = (element.scrollTop / (element.scrollHeight - element.clientHeight)) * 100;

			if (percentage > 90 && reachedBottom) {
				scrollSearch();
			}
		};
	});
</script>

<div class="relative mx-auto w-full max-w-7xl px-6">
	<div class="beatforge-discover-header-wrapper relative">
		<div class="relative mt-4 flex flex-row items-center justify-between">
			<div class="flex flex-col gap-2">
				<h1 class="relative z-[2] text-4xl font-black leading-[1.25] tracking-wide">
					{$currentInstance?.name ?? 'Cannot find instance'}
				</h1>
				<div class="flex flex-row gap-2">
					<Pill label={`v${$currentInstance?.version}`}>
						<CategoryIcon customClasses="w-5 h-5" />
					</Pill>
					<Pill
						label={`Created ${Sugar.Date.relative(
							new Date(Date.parse($currentInstance?.timestamp ?? ''))
						)}`}
					>
						<ClockIcon customClasses="w-5 h-5" />
					</Pill>
				</div>
			</div>

			<div class="relative z-[2] mt-2 flex flex-row gap-4 fill-white">
				<Button>
					<DotsIcon customClasses="w-6 h-6 " />
				</Button>
			</div>
		</div>

		<div class="beatforge-discover-filter-wrapper sticky top-4 z-[2] mt-4 flex flex-row gap-4">
			<div
				class="bg-primary-800 text-primary-50 relative flex w-full flex-row items-center overflow-hidden rounded-md"
			>
				<SearchIcon customClasses="w-4 h-4 absolute left-4 z-10 select-none pointer-events-none" />
				<input
					on:input={debounce(textSearch, 150)}
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
					on:change={scrollSearch}
				>
					<option value={Sort.Newest}>Newest</option>
					<option value={Sort.Oldest}>Oldest</option>
					<option value={Sort.MostPopular}>Most popular</option>
					<option value={Sort.LeastPopular}>Least popular</option>
				</select>
			</div>
		</div>

		<div
			role="list"
			class="beatforge-discover-list-items-wrapper relative mt-4 overflow-hidden rounded-lg"
		>
			{#if data.length > 0}
				{#each data as mod, i}
					{#key data.length}
						<ModListItem
							iter={i}
							name={mod.name}
							id={mod.id}
							slug={mod.slug}
							author={mod.author.username}
							instance_id={$currentInstance?.id.toString() ?? ''}
							description={mod.description}
							icon={mod.icon}
							selected={mod.selected}
							installed={mod.installed ?? false}
						/>
					{/key}
				{/each}
			{:else}
				<!-- {#each Array(20) as _} -->
				<p class="text-fore-muted text-lg">No mods found.</p>
				<!-- {/each} -->
			{/if}

			<!-- <div bind:this={scroll_end} class="absolute bottom-[900px] h-1 w-1"></div> -->
		</div>
	</div>
</div>