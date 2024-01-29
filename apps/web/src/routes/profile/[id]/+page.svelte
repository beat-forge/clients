<script lang="ts">
	import { Pill } from 'ui/pill';
	// @ts-nocheck
	import type { PageData } from './$types';
	export let data: PageData;
	export let userData = data.body.data;
	import Sugar from 'sugar';
	import { CalendarIcon, AtSymbolIcon } from 'ui/icons';
	import ModListItem from '$lib/components/ModListItem.svelte';
	import { getContextClient, gql, queryStore } from '@urql/svelte';
	import { user } from '$lib/stores/user';

	let sugarDate: string;
	$: {
		sugarDate = Sugar.Date.relative(new Date(Date.parse(userData.createdAt)));
	}
</script>

<div class="h-full w-full">
	<div class="flex justify-center">
		<div class="flex flex-col gap-2 w-full max-w-7xl px-4">
			<div
				class={`max-w-3xl min-w-full h-56 cover flex justify-center p-3 rounded-t-md ${
					userData.banner ? `bg-[url(${userData.banner})]` : 'bg-[url("/images/glowheader.svg")]'
				} bg-center`}
			/>
			<div class="flex p-4 bg-primary-850 h-20 justify-between -mt-4">
				<div class="sm:ml-12 -mt-20">
					<img
						src={userData.avatar ? userData.avatar : '/icons/default.png'}
						alt="icon"
						class="w-32 border-primary-850 border-4 rounded-full"
					/>
				</div>
			</div>
			<div class="flex -mt-4 p-4 pb-8 bg-primary-850 rounded-b-md">
				<div class="sm:ml-12 overflow-hidden">
					<div class="flex">
						<h1 class="text-4xl mt-2 font-black leading-[1.25] tracking-wide">
							{userData.displayName ? userData.displayName : userData.username}
						</h1>
					</div>
					<p class="text-white-100 text-sm font-semibold py-3 opacity-70 max-w-[68ch]">
						{userData.bio}
					</p>
					<div class="flex mt-5 gap-4 overflow-x-auto flex-wrap">
						<Pill label={`${userData.username}`}>
							<AtSymbolIcon customClasses="w-5 h-5" />
						</Pill>
						<Pill label={`Joined ${sugarDate ?? ""}`}>
							<CalendarIcon customClasses="w-5 h-5" />
						</Pill>
					</div>
				</div>
			</div>

			<div class="sm:p-8 bg-primary-850 rounded-md sm:pl-16 px-3 py-4 w-full">
				<h2 class="text-white-100 text-lg font-bold mb-4">
					Mods by {userData.displayName ? userData.displayName : userData.username}
				</h2>
				<div class="overflow-hidden rounded-lg">
					{#each userData.mods as mod}
						<ModListItem
							name={mod.name}
							slug={mod.slug}
							author={mod.author.username}
							description={mod.description}
							category={mod.category.name}
							downloads={mod.stats.downloads}
							updatedAt={Date.parse(mod.updatedAt)}
							icon={mod.icon}
						/>
					{/each}
				</div>
				<div class="mt-4 font-black text-xs text-primary-300">
					<p>Total Mods: {userData.mods.length}</p>
				</div>
			</div>
		</div>
	</div>
</div>
