<script lang="ts">
	import { invoke } from '@tauri-apps/api/tauri';
	import { Button } from 'ui/button';
	

	$: name = "";
	// TODO
	// on submit, invoke add_instance() from tauri
	const addInstance = async () => {
		await invoke('add_instance', { name: name })
	}
</script>

<div class="mx-auto w-full max-w-7xl px-6">
	<div class="beatforge-add-header-wrapper">
		<h1 class="relative z-[2] mt-4 max-w-[700px] text-4xl font-black leading-[1.25] tracking-wide">
			Add Instance
		</h1>
	</div>

	<div class="beatforge-discover-filter-wrapper mt-4 flex flex-col gap-2">
		<div class="mb-6 max-w-2xl leading-relaxed">
			By default, BeatForge will automatically detect installed Beat Saber versions if you use a
			third-party mod manager. For advanced users and developers, you can add custom instances via
			folder paths.
		</div>
		<div
			class="bg-primary-800 text-primary-50 relative flex w-full flex-row items-center overflow-hidden rounded-md"
		>
			<input
				bind:value={name}
				class="flex w-full flex-row items-center gap-2 py-3 pl-4 pr-8"
				placeholder="instance name"
			/>
		</div>
		
		<Button on:click={addInstance} customClasses="ml-auto w-fit whitespace-nowrap" variant="primary">Add Instance</Button>
	</div>
</div>
