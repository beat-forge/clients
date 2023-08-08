<script lang="ts">
	import { appWindow } from '@tauri-apps/api/window';
</script>

<div
	data-tauri-drag-region
	class="beatforge-titlebar relative z-[2147483647] cursor-default flex h-8 w-full select-none flex-row items-center justify-end"
>
	<div class="absolute top-0 right-0 select-none flex">
		<button
			on:click={appWindow.minimize}
			class="cursor-default px-4 py-2 font-bold text-white hover:bg-black-800 select-none"
		>
			<img src="/icons/minimize.svg" alt="minimize" />
		</button>

		<button
			on:click={appWindow.maximize}
			class="cursor-default px-4 py-2 font-bold text-white hover:bg-black-800 select-none"
		>
			<img src="/icons/maximize.svg" alt="maximize" />
		</button>

		<button
			on:click={appWindow.close}
			class="cursor-default rounded-tr-lg px-4 py-2 font-bold text-white hover:bg-[#c42c1d] select-none"
		>
			<img src="/icons/x.svg" alt="close" />
		</button>
	</div>
</div>

<div class="beatforge-titlebar-blur-area right-4" />
