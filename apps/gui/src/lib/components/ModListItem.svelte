<script lang="ts">
	import { DownloadIcon, CheckmarkIcon } from 'ui/icons';
	import { Button } from 'ui/button';

	export let iter: number;

	export let name: string;
	export let slug: string;
	export let author: {
		username: string;
	};
	export let description: string;
	// export let category: string;
	// export let downloads: any;
	export let icon: string;
	export let id: string;
	export let instance_id: string;
	export let installed: boolean;

	export let selected: boolean;

	import { selectedItems } from '$lib/stores';
	import { invoke } from '@tauri-apps/api/tauri';
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	let items: string[] = [];

	selectedItems.subscribe((val) => {
		items = val;
		selected = val.includes(slug);
	});

	// Event handler to toggle selection
	const toggleSelection = () => {
		selectedItems.update((val) => {
			if (val.includes(slug)) {
				return val.filter((item) => item !== slug);
			} else {
				return [...val, slug];
			}
		});
	};

	const installMod = (e: any) => {
		e.stopPropagation();
		invoke('install_mod', { instanceId: parseInt(instance_id), modId: id }).then((res: any) => {
			console.log(res);
		});
	};
</script>

<div
	data-installed={installed}
	data-instance-id={instance_id}
	data-mod-id={id}
	class={`beatforge-focusable-element beatforge-mod-list-item bg-primary-800 my-2 flex w-full min-w-0 flex-row items-center gap-2 rounded-lg p-2 outline-none transition-all duration-[120ms] hover:duration-[0ms] md:my-0 md:gap-4 md:rounded-none md:p-4`}
>
	<div
		class="beatforge-mod-list-item-image bg-primary-600 mr-2 flex h-12 w-12 flex-shrink-0 overflow-hidden rounded-md md:h-16 md:w-16"
	>
		<img
			alt={`Listing for mod ${name}, created by ${author}`}
			src={icon ? icon : '/images/unknown.svg'}
			class="h-full w-full object-cover"
		/>
	</div>
	<div class="beatforge-mod-list-item-info flex w-full min-w-0 flex-col gap-1 truncate md:gap-1">
		<div class="beatforge-mod-list-item-info-title flex items-center gap-2">
			<h2 class="text-md font-black md:text-xl">{name}</h2>
			<p class="text-primary-200 text-xs">by {author}</p>
			{#if installed}
				<div class="">Installed</div>
			{/if}
		</div>
		<div class="beatforge-mod-list-item-description flex min-w-0">
			<p class="text-primary-200 min-w-0 truncate text-xs font-medium">
				{description}
			</p>
		</div>
	</div>
	<div
		class="beatforge-mod-list-item-pills flex min-w-[130px] flex-col gap-1 overflow-x-auto whitespace-nowrap rounded-md p-1"
	>
		<!-- <div class="flex flex-row items-center gap-1 text-xs text-primary-200">
                <CategoryIcon customClasses="w-4 h-4" />
                {category}
            </div> -->
		<!-- <div class="text-primary-200 flex flex-row items-center gap-1 text-xs">
			<DownloadIcon customClasses="flex-shrink-0 w-4 h-4" />
			{downloads} Downloads
		</div>
		<div class="text-primary-200 flex flex-row items-center gap-1 text-xs">
			{category}
		</div> -->
		<Button on:click={installMod} variant={installed ? 'secondary' : 'primary'}>
			<slot name="leading">
				{#if installed}
					<CheckmarkIcon customClasses="flex-shrink-0 w-4 h-4" />
				{:else}
					<DownloadIcon customClasses="flex-shrink-0 w-4 h-4" />
				{/if}
			</slot>

			{#if installed}
				Installed
			{:else}
				Download
			{/if}
		</Button>
	</div>
</div>
