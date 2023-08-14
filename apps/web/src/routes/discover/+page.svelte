<script lang="ts">
	// import Search from '$lib/components/icons/search.svelte';
	import { SearchIcon, ChevronDownIcon } from 'ui/icons';
	import { Button } from 'ui/button';

	import VirtualList from 'svelte-tiny-virtual-list';
    import ModListItem from '$lib/components/ModListItem.svelte';
	import { onMount } from 'svelte';

    enum Sort {
        Newest,
        Oldest,
        MostPopular,
        LeastPopular
    }

	let listHeight;
    let data: any[] = [];
    let sort = Sort.Newest;

    const search = async (q: String) => {
        const res = await (await fetch(`https://search.beatforge.net/indexes/staging_mods/search`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'Bearer ' + '1bb9363429a821bb444c459fe529505de0c9985a6abb6802c1849797b4ae316b'
            },
            body: JSON.stringify({
                q: q,
                sort: sort
            })
        })).json();
        data = res.hits;
    };

    const searchOnInput = async (e: any) => {
        await search(<String>(<HTMLInputElement>e.target).value)
    };

    onMount(async () => {
        await search('');
    })
</script>

<div class="w-full max-w-7xl px-6 mx-auto">
	<div class="beatforge-discover-header-wrapper">
		<h1 class="max-w-[700px] text-5xl font-black leading-[1.25] tracking-wide mt-4">Discover</h1>
	</div>

	<div class="beatforge-discover-filter-wrapper flex flex-row gap-4 mt-4">
		<div class="relative flex w-full flex-row items-center overflow-hidden rounded-md bg-primary-800 text-primary-50">
			<SearchIcon customClasses="w-4 h-4 absolute left-4 z-10 select-none pointer-events-none" />
			<input
                on:input={searchOnInput}
				class="flex w-full flex-row items-center gap-2 py-3 pl-12"
				placeholder="Search for mods"
			/>
		</div>

		<div class="relative flex w-2/5 flex-row items-center overflow-hidden rounded-md bg-primary-800">
			<ChevronDownIcon customClasses="w-4 h-4 absolute right-4 z-10 select-none pointer-events-none" />
			<select class="flex w-full flex-row items-center gap-2 py-3 pl-4 pr-12">
				<option value="1">Newest</option>
				<option value="2">Oldest</option>
				<option value="3">Most popular</option>
				<option value="4">Least popular</option>
			</select>
		</div>
	</div>

	<div
		class="beatforge-discover-list-items-wrapper mt-4 overflow-hidden rounded-md"
	>
		{#each data as mod}
            <ModListItem name={mod.name} slug={mod.slug} author={mod.author.username} description={mod.description} category={mod.category.name} downloads={mod.stats.downloads} updatedAt={mod.updatedAt} icon={mod.icon} />
		{/each}
        <!-- <VirtualList width="100%" itemCount={data.length} itemSize={129} height="100%">
            <div slot="item" let:index let:style {style}>
				<p>{data[index].name}</p>
                <DiscoverListItem
                    name={data.mods[index].name}
                    slug={data.mods[index].slug}
                    author={data.mods[index].author.username}
                    description={data.mods[index].description}
                    category={data.mods[index].category.name}
                    downloads={data.mods[index].stats.downloads}
                    updatedAt={data.mods[index].updatedAt}
                    icon={data.mods[index].icon}
                />
            </div>
        </VirtualList> -->
	</div>
</div>
