<script lang="ts">
	import Search from '$lib/icons/search.svelte';
</script>

<div
	class="sticky backdrop-blur-2xl top-4 z-[2] flex flex-row items-center justify-between rounded-xl bg-gradient-to-br from-[#cccccc11] to-[#cccccc22] shadow-xl"
>
	<div class="relative flex w-full flex-row items-center overflow-hidden rounded-lg">
		<Search className="w-4 h-4 absolute left-4 z-10 select-none pointer-events-none" />
		<input
			class="flex w-full flex-row items-center gap-2 py-3 pl-12"
			placeholder="Search for mods"
		/>
	</div>
</div>
