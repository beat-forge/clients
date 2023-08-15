<script lang="ts">
import { open } from '@tauri-apps/api/shell';
	import { ChevronDownIcon, FilterIcon } from 'ui/icons';

</script>
<div class="flex flex-col items-center justify-center w-full h-full">
	<div
		class="flex mb-4 flex-row items-center text-sm font-semibold uppercase tracking-[.125rem] text-[#ffffff66]"
	>
		BeatForge Client
	</div>

	<button role="link" on:click={() => open('https://discord.gg/U5QXh5zCDz')} class="flex flex-row items-center p-4 bg-primary-700 hover:bg-primary-600 rounded-t-xl rounded-b-md min-w-[240px] mb-1">
		<img src="/icons/discord.svg" alt="Discord logo" class="flex mr-2" />
		Discord
	</button>
	<button role="link" on:click={() => open('https://x.com/beatforged')} class="flex flex-row items-center p-4 bg-primary-700 hover:bg-primary-600 rounded-md min-w-[240px] mb-1">
		<img src="/icons/twitter-x.svg" alt="X logo" class="w-6 h-6 flex mr-2 ml-0.5 opacity-50" />
		X
	</button>
	<button role="link" on:click={() => open('https://github.com/beat-forge')} class="flex flex-row items-center p-4 bg-primary-700 hover:bg-primary-600 rounded-t-md rounded-b-xl min-w-[240px]">
		<img src="/icons/github.svg" alt="GitHub logo" class="flex mr-2" />
		GitHub
	</button>
</div>
