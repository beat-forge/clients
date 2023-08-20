<script lang="ts">
	import { ArrowSmallRightIcon, CalendarIcon, CategoryIcon, DotsIcon, Pill } from 'ui';
	import { Button } from 'ui/button';
	import Sugar from 'sugar';
	// get pathname from +page.ts
	import type { PageData } from './$types';
	import { invoke } from '@tauri-apps/api/tauri';
	import { currentInstance } from '$lib/stores';
	import InfiniteScroll from '$lib/components/InfiniteScroll.svelte';
	import { SearchIcon, ChevronDownIcon, FilterIcon } from 'ui/icons';
	import ModListItem from '$lib/components/ModListItem.svelte';
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { afterUpdate, onDestroy, onMount } from 'svelte';
	import type { Instance, Mod } from '$lib/types';
	import { invalidateAll } from '$app/navigation';

	let instanceId: number;
	let instance: any;

	let scroll_end: HTMLElement;

	let data: any[] = [];
	let newData: any[] = [];

	$: data = [...data, ...newData];
	$: sort = Sort.Newest;
	$: searchValue = '';
	$: currentPage = 1;
	$: gameVersion = '1.28.0';

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
						hitsPerPage: 20,
						filter: [[`supported_versions = ${gameVersion}`]]
					})
				}
			)
		).json();

		newData = res.hits;
		newData = newData;

		console.log(res);
	};

	const searchMore = async () => {
		currentPage = currentPage + 1;
		await search(searchValue);
	};

	let called = false;

	const onScroll = (e: any) => {
		console.log('scrolL!');
	};

	let unsubscribe = currentInstance.subscribe((val) => {
		instanceId = val!;

		invoke('get_instance', { id: val! }).then((res: any) => {
			console.log(res);
			instance = res;
		});

		//reset scroll
		document.getElementById('scroll')!.scrollTop = 0;
		data = [];
		currentPage = 1;
		called = false;
		// searchMore();
	});

	document.getElementById('scroll')!.onscroll = function (e: any) {
		let element = e.target as HTMLDivElement;

		let percentage = ((element.scrollTop + element.clientHeight) / element.scrollHeight) * 100;
		// console.log(percentage);
		if (percentage > 80 && !called) {
			searchMore();
			called = true;
		} else if (percentage < 80) {
			called = false;
		}
	};
	
	onMount(async () => {
		await search('*');
	});

	onDestroy(() => {
		unsubscribe();
	});
</script>

<div class="relative mx-auto w-full max-w-7xl px-6">
	<div class="beatforge-discover-header-wrapper relative">
		<div class="relative mt-4 flex flex-row items-center justify-between">
			<div class="flex flex-col gap-2">
				<h1 class="relative z-[2] text-4xl font-black leading-[1.25] tracking-wide">
					{instance?.name ?? 'Cannot find instance'}
				</h1>
				<div class="flex flex-row gap-2">
					<Pill label={instance?.version} customClasses="capitalize">
						<CategoryIcon customClasses="w-5 h-5" />
					</Pill>
					<!-- wamy pls fix -fero -->
					<!-- <Pill label={Sugar.Date.relative(new Date(Date.parse(instance?.timestamp).toString()))}>
						<CalendarIcon customClasses="w-5 h-5" />
					</Pill> -->
				</div>
			</div>

			<div class="relative z-[2] mt-2 flex flex-row gap-4 fill-white">
				<Button>
					<DotsIcon customClasses="w-6 h-6" />
					<!-- Dropdown: open folder in explorer, copy path, delete instance, check for mod updates (?) -->
				</Button>
				<Button variant="primary" customClasses="w-fit whitespace-nowrap">Launch</Button>
			</div>
		</div>

		<div class="beatforge-discover-filter-wrapper sticky top-4 z-[2] mt-4 flex flex-row gap-4">
			<div
				class="relative flex w-full flex-row items-center overflow-hidden rounded-md bg-primary-800 text-primary-50"
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
				class="relative flex min-w-[33%] flex-row items-center overflow-hidden rounded-md bg-primary-800"
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
				class="relative flex min-w-[33%] flex-row items-center overflow-hidden rounded-md bg-primary-800"
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

		<!-- {#if selectedMods.length > 0}
			<div
				class="absolute bottom-0 left-0 right-0 z-[4] grid place-content-center py-8"
				transition:fly={{ y: '200%', duration: 500, easing: quintOut }}
			>
				<button
					class="text-md rounded-full bg-white px-4 py-2 font-bold text-black shadow-2xl duration-300"
				>
					Install Selected Mods
				</button>
			</div>

			<div
				style="-webkit-mask-image: linear-gradient(transparent, black 80%);"
				class="absolute bottom-0 left-0 right-0 z-[3] grid place-content-center py-8 backdrop-blur-2xl"
				transition:fly={{ y: '200%' }}
			></div>
		{/if} -->

		<div class="beatforge-discover-list-items-wrapper relative mt-4">
			{#if data.length > 0}
				{#each data as mod}
					{#key data.length}
						<ModListItem
							name={mod.name}
							id={mod.id}
							slug={mod.slug}
							author={mod.author.username}
							instance_id={instanceId?.toString() ?? ''}
							description={mod.description}
							icon={mod.icon}
							selected={mod.selected}
							installed={mod.installed ?? false}
						/>
					{/key}
				{/each}
			{:else}
				<p class="text-center text-primary-300">No mods found</p>
			{/if}

			<!-- <div bind:this={scroll_end} class="absolute bottom-[900px] h-1 w-1"></div> -->
		</div>
	</div>
</div>
