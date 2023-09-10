<script lang="ts">
	import { DownloadIcon, CheckmarkIcon } from 'ui/icons';
	import { Button } from 'ui/button';

	export const _iter: number | undefined = undefined;
	export let mod: SearchMod;
	export let instance_id: number;

	import { invoke } from '@tauri-apps/api/tauri';
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { ModStatus, type InstanceUpdate, type ModInstalled, type SearchMod } from '$lib/types';
	import { listen } from '@tauri-apps/api/event';
	import { onDestroy } from 'svelte';

	let items: string[] = [];

	const installMod = (e: any) => {
		e.stopPropagation();
		// check if mod is already installed
		if (mod.status != ModStatus.NotInstalled) return;
		mod.status = ModStatus.Installing;
		invoke('install_mod', { instanceId: instance_id, modId: mod.id }).then((res: any) => {
			console.log(res);
		});
	};

	//listen for button state updates
	const unlisten = listen("instance-update", async (event) => {
		console.log(JSON.stringify(event.payload));
		if ((<InstanceUpdate> event.payload).instance_id === instance_id) {
			if ((<InstanceUpdate<ModInstalled>>event.payload).kind.ModInstalled === mod.id) {
				mod.status = ModStatus.Installed;
			}
		}
	});

	onDestroy(async () => {
		(await unlisten)();
	});
</script>

<div
	data-installed={mod.status}
	data-instance-id={instance_id}
	data-mod-id={mod.id}
	class={`beatforge-focusable-element beatforge-mod-list-item bg-primary-800 my-2 flex w-full min-w-0 flex-row items-center gap-2 rounded-lg p-2 outline-none transition-all duration-[120ms] hover:duration-[0ms] md:my-0 md:gap-4 md:rounded-none md:p-4`}
>
	<div
		class="beatforge-mod-list-item-image bg-primary-600 mr-2 flex h-12 w-12 flex-shrink-0 overflow-hidden rounded-md md:h-16 md:w-16"
	>
		<img
			alt={`Listing for mod ${mod.name}, created by ${mod.author.display_name ?? mod.author.username}`}
			src={'/images/unknown.svg'}
			class="h-full w-full object-cover"
		/> <!-- todo: add icon support -->
	</div>
	<div class="beatforge-mod-list-item-info flex w-full min-w-0 flex-col gap-1 truncate md:gap-1">
		<div class="beatforge-mod-list-item-info-title flex items-center gap-2">
			<h2 class="text-md font-black md:text-xl">{mod.name}</h2>
			<p class="text-primary-200 text-xs">by {mod.author.display_name ?? mod.author.username}</p>
			{#if mod.status == ModStatus.Installed}
				<div class="">Installed</div>
			{/if}
		</div>
		<div class="beatforge-mod-list-item-description flex min-w-0">
			<p class="text-primary-200 min-w-0 truncate text-xs font-medium">
				{mod.description}
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
		{#key mod.status}
			<Button on:click={installMod} variant={mod.status == ModStatus.Installed? 'secondary' : 'primary'}>
				<slot name="leading">
					{#if mod.status == ModStatus.Installed}
						<CheckmarkIcon customClasses="flex-shrink-0 w-4 h-4" />
					{:else if mod.status == ModStatus.Installing}
						<!-- todo: add spinner -->
						<div></div>
					{:else}
						<DownloadIcon customClasses="flex-shrink-0 w-4 h-4" />
					{/if}
				</slot>

				{#if mod.status == ModStatus.Installed}
					Installed
				{:else}
					Download
				{/if}
			</Button>
		{/key}
	</div>
</div>
