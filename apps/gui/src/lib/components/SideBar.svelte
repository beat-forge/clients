<script lang="ts">
	import { invoke } from '@tauri-apps/api/tauri';
	import { page } from '$app/stores';

	import Instance from '$lib/components/Instance.svelte';
	import { PlusIcon, SquareStack, PersonIcon } from 'ui/icons';

	let instances: any[] = [];
	$: invoke('detect_instances', { save: true }).then((res: any) => {
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
				<!-- <a href="/" class="group w-full transition duration-[120ms] hover:bg-[#ffffff22]"> -->
				<img src="/images/logo.svg" draggable="false" alt="logo" class="flex h-4 pl-0.5" />
				<!-- </a> -->
			</div>
		</div>

		<!-- style="background: rgba(255, 255, 255, 33%); box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.25);" -->
		<div class="">
			<a
				href="/discover"
				class="-ml-2 flex w-[calc(100%+16px)] flex-row items-center gap-4 rounded-md px-2 py-2 transition duration-[120ms] hover:bg-[#ffffff22]"
				style={activeUrl === `/discover`
					? 'background: rgba(255, 255, 255, 23%); box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.25);'
					: ''}
			>
				<SquareStack customClasses="w-5 h-5" />
				<p>Discover Mods</p>
			</a>

			<!-- If loggedout -->
			<a
				href="/account"
				class="-ml-2 flex w-[calc(100%+16px)] flex-row items-center gap-4 rounded-md px-2 py-2 transition duration-[120ms] hover:bg-[#ffffff22]"
				style={activeUrl === `/account`
					? 'background: rgba(255, 255, 255, 23%); box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.25);'
					: ''}
			>
				<PersonIcon customClasses="w-5 h-5" />
				<p>Account & Sync</p>
			</a>

			<a
				href="/instance/add"
				class="-ml-2 flex w-[calc(100%+16px)] flex-row items-center gap-4 rounded-md px-2 py-2 transition duration-[120ms] hover:bg-[#ffffff22]"
				style={activeUrl === `/instance/add`
					? 'background: rgba(255, 255, 255, 23%); box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.25);'
					: ''}
			>
				<PlusIcon customClasses="w-5 h-5" />
				<p>Add Instance</p>
			</a>
		</div>

		<!-- instance list -->
		{#each instances as instance}
			<Instance name={instance.name} version={instance.version} />
		{:else}
			<!-- <div></div> -->
			<Instance name="streaming" version="1.28.0" />
			<Instance name="hi again" version="1.29.1" />
			<!-- <Instance name="hi1" version="1.29.1" />
			<Instance name="hi again2" version="1.29.1" />
			<Instance name="hi2" version="1.29.1" />
			<Instance name="hi again3" version="1.29.1" />
			<Instance name="hi3" version="1.29.1" />
			<Instance name="hi again5" version="1.29.1" />
			<Instance name="hi6" version="1.29.1" />
			<Instance name="hi again6" version="1.29.1" />
			<Instance name="hi7" version="1.29.1" />
			<Instance name="hi again7" version="1.29.1" />
			<Instance name="hi8" version="1.29.1" />
			<Instance name="hi again8" version="1.29.1" />
			<Instance name="hi9" version="1.29.1" />
			<Instance name="hi again9" version="1.29.1" />
			<Instance name="hi10" version="1.29.1" />
			<Instance name="hi again10" version="1.29.1" /> -->
		{/each}
	</div>
</div>
