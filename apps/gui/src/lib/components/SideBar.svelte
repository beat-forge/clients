<script lang="ts">
	import { invoke } from '@tauri-apps/api/tauri';
	import { page } from '$app/stores';

	import SidebarInstance from '$lib/components/SidebarInstance.svelte';
	import { PlusIcon, PersonIcon, HomeIcon } from 'ui/icons';
	import { currentInstance } from '$lib/stores';
	import type { Instance } from '$lib/types';

	let instances: Instance[] = [];
	$: invoke('get_instances').then((res: any) => {
		instances = res;
	});

	$: activeUrl = $page.url.pathname;
</script>

<div
	class="relative z-[9999] m-2 flex w-64 min-w-0 flex-shrink-0 flex-col overflow-hidden rounded-md bg-gradient-to-b from-[#5c18ae] to-[#8b5d69] font-medium"
>
	<div class="absolute left-0 right-0 top-0 h-8" data-tauri-drag-region />
	<div
		class="-mr-4 flex h-full flex-col overflow-hidden p-4 pb-2 pr-8 text-sm hover:overflow-y-scroll hover:pr-[15px]"
	>
		<!-- logo -->
		<div class="mb-4 flex items-center justify-between">
			<div class="text-sm font-bold text-white">
				<img src="/images/logo.svg" draggable="false" alt="logo" class="flex h-4 pl-0.5" />
			</div>
		</div>

		<div>
			<a
				href="/"
				class="-ml-2 flex w-[calc(100%+16px)] flex-row items-center gap-4 rounded-md px-2 py-2 transition duration-[120ms] hover:bg-[#ffffff22]"
				style={activeUrl === `/`
					? 'background: rgba(255, 255, 255, 23%); box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.25);'
					: ''}
			>
				<HomeIcon customClasses="w-5 h-5" />
				<p>Home</p>
			</a>

			<div
				class="pointer-events-none -ml-2 flex w-[calc(100%+16px)] flex-row items-center gap-4 rounded-md px-2 py-2 transition duration-[120ms] hover:bg-[#ffffff22]"
				style={activeUrl === `/account`
					? 'background: rgba(255, 255, 255, 23%); box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.25);'
					: ''}
			>
				<PersonIcon customClasses="w-5 h-5" />
				<p>Account & Sync</p>

				<div class="ml-auto rounded-full bg-[#ffffff22] px-2 py-1 text-xs font-black text-white">
					Soon
				</div>
			</div>

			<a
				href="/add"
				on:click={() => {
					currentInstance.set(instances[0]); // todo: fix this hack so it doesn't break on non instance pages
				}}
				class="-ml-2 flex w-[calc(100%+16px)] flex-row items-center gap-4 rounded-md px-2 py-2 transition duration-[120ms] hover:bg-[#ffffff22]"
				style={activeUrl === `/add`
					? 'background: rgba(255, 255, 255, 23%); box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.25);'
					: ''}
			>
				<PlusIcon customClasses="w-5 h-5" />
				<p>Add Instance</p>
			</a>
		</div>

		<!-- instance list -->
		{#each instances as instance}
			<SidebarInstance {instance} />
		{:else}
			<div></div>
		{/each}
	</div>
</div>
