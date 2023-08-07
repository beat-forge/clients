<script lang="ts">
	import ModCategory from '$lib/components/ModCategory.svelte';

	export let name: string;
	export let author: {
		username: string;
	};

	export let description: string;
	export let versions: any;
	export let category: string;
	export let icon: string;

	export let verified: boolean;
</script>

<div
	class="flex w-full min-w-0 flex-row items-center gap-1 rounded-xl transition duration-[120ms] hover:bg-black-600 hover:duration-[0ms]"
>
	<img
		src={icon ? `/icons/${icon}.svg` : `/icons/unknown.svg`}
		class="m-2 flex aspect-square h-20 min-h-[80px] w-20 min-w-[80px] rounded-lg"
		alt="cover"
	/>
	<div class="flex min-w-0 flex-col gap-2 p-4">
		<div class="flex flex-row items-center">
			<h1 class="mr-2 font-semibold">{name}</h1>
			<h2 class="mr-3 opacity-50">by {author}</h2>
			<ModCategory name={category} />
			{#if verified}
				<img src="/icons/verified.svg" class="ml-2 h-4 w-4 opacity-50" alt="verified" />
			{/if}
		</div>
		<p class="truncate">{description}</p>
		<div class="flex flex-row gap-2">
			{#each versions as version}
				<div class="rounded-full bg-[#ffffff22] px-2 py-1 text-[10px] font-bold uppercase tracking-widest shadow-md">
					<!-- get the game versions -->
					{#each version.supportedGameVersions as gameVersion}
						{gameVersion}
					{/each}
				</div>
			{/each}
		</div>
	</div>
</div>
