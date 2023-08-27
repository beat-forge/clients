<script lang="ts">
	import { appWindow } from '@tauri-apps/api/window';
	import { useInterval } from '$lib/utils';
	import { onMount } from 'svelte';

	let maximized = false;
	let fullscreen = false;

	const tauriInterval = useInterval(() => {
		appWindow.isMaximized().then((value) => {
			maximized = value;
		});
		appWindow.isFullscreen().then((value) => {
			fullscreen = value;
		});
	}, 200);

	onMount(() => {
		tauriInterval.start();

		return tauriInterval.stop;
	});
</script>

<div
	tabindex="-1"
	data-tauri-drag-region
	class="beatforge-titlebar relative z-[2147483647] flex h-8 w-full cursor-default select-none flex-row items-center justify-end"
>
	<div class="absolute right-0 top-0 flex select-none">
		<p>Maximized: {maximized ? 'Yes' : 'No'}</p>
		<p>Fullscreen: {fullscreen ? 'Yes' : 'No'}</p>
		<button
			tabindex="-1"
			on:click={appWindow.minimize}
			class="hover:bg-primary-800 cursor-default select-none px-4 py-2 font-bold text-white"
		>
			<img src="/icons/minimize.svg" alt="minimize" />
		</button>


		<button
			tabindex="-1"
			on:click={appWindow.toggleMaximize}
			class="hover:bg-primary-800 cursor-default select-none px-4 py-2 font-bold text-white"
		>
			{#if maximized}
				<img src="/icons/restore.svg" alt="restore" />
				{:else}
				<img src="/icons/maximize.svg" alt="maximize" />
			{/if}
		</button>

		<button
			tabindex="-1"
			on:click={appWindow.close}
			class="cursor-default select-none rounded-tr-lg px-4 py-2 font-bold text-white hover:bg-[#c42c1d]"
		>
			<img src="/icons/x.svg" alt="close" />
		</button>
	</div>
</div>

<div class="beatforge-titlebar-blur-area" />
