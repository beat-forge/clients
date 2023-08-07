<script lang="ts">
	import { invoke } from '@tauri-apps/api/tauri';
	import Instance from '$lib/components/Instance.svelte';

	let instances: any[] = [];
	$: invoke('detect_instances', { save: true }).then((res: any) => {
		instances = res;
	});
</script>

<div
	class="z-[9999] m-2 flex w-72 min-w-0 flex-shrink-0 flex-col overflow-visible rounded-md bg-gradient-to-b from-[#5c18ae] to-[#8b5d69]"
>
	<div class="flex h-full flex-col overflow-y-auto p-5 text-sm">
		<!-- instances -->
		<div class="mb-4 flex items-center justify-between">
			<div class="brand-font text-xs font-bold uppercase tracking-widest text-[#ffffff66]">
				Instances
			</div>

			<div class="flex h-5 w-5 text-[#ffffff66]">
				<!-- <PlusSmall /> -->
				<img src="/icons/plus.svg" alt="plus" />
			</div>
		</div>

		{#each instances as instance}
			<Instance name={instance.name} version={instance.version} active={false} />
		{:else}
			<!-- No instances were found, ask the user if they would like to autodetect -->
			<p class="text-[#ffffff66]">No instances were found, would you like to autodetect?</p>
			<button
				class="mt-2 bg-[#ffffff22] rounded-lg px-3 py-1 text-sm font-semibold uppercase tracking-[.125rem] text-[#ffffff66]"
			>
				Autodetect
			</button>
		{/each}
	</div>
</div>
<!--
<div
	class="fixed top-0 left-48 w-32 h-full min-w-0 blur-[128px] flex-shrink-0 flex-col overflow-visible rounded-md bg-gradient-to-b from-[#4712B6] to-[#954C81] opacity-[0.25] pointer-events-none select-none sidebar-glow"
/> -->
