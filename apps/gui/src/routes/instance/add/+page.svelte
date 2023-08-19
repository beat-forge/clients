<script lang="ts">
	import { Button } from 'ui/button';

	// TODO
	// on submit, invoke add_instance() from tauri
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
			<input class="flex w-full flex-row items-center gap-2 py-3 pl-4 pr-8" placeholder="C:\ ..." />
			<div class="mx-2 my-2">
				<Button customClasses="ml-auto w-fit whitespace-nowrap" variant="primary"
					>Browse Files</Button
				>
			</div>
		</div>
	</div>
</div>
