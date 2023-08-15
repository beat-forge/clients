<script lang="ts">
	import ModCategory from '$lib/components/ModCategory.svelte';

	export let name: string;
	export let author: {
		username: string
	}
	export let description: string;
	export let category: string;
	export let icon: string;
	
	export let verified: boolean;
</script>


	<div class="flex w-full flex-row items-center gap-1 rounded-xl min-w-0 hover:bg-primary-600 transition hover:duration-[0ms] duration-[120ms]">
	<img
		src={icon ? `/icons/${icon}.svg` : `/icons/unknown.svg`}
		class="m-2 flex aspect-square min-w-[80px] min-h-[80px] h-20 w-20 rounded-lg"
		alt="cover"
	/>
	<div class="flex flex-col gap-2 p-4 min-w-0">
		<div class="flex flex-row items-center">
			<h1 class="mr-2 font-semibold">{name}</h1>
			<h2 class="mr-3 opacity-50">by {author}</h2>
			<ModCategory name={category} />
			{#if verified}
				<img
					src="/icons/verified.svg"
					class="w-4 h-4 ml-2 opacity-50"
					alt="verified"
				/>
			{/if}
		</div>
		<p class="truncate">{description}</p>
	</div>
</div>

