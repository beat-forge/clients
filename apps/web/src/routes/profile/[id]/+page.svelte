<script lang="ts">
	import { Pill } from 'ui/pill';
	// @ts-nocheck
	import type { PageData } from './$types';
	import { copiedState } from '$lib/stores/mod';
	export let data: PageData;

    export let userData = data.body.data;
    
	import Sugar from 'sugar';

    import { CalendarIcon, PersonIcon, DownloadIcon, CopyIcon, GithubIcon, CheckmarkIcon, VerifiedIcon, CategoryIcon, NotVerifiedIcon, AtSymbolIcon } from 'ui/icons';
    import Button from 'ui/button/Button.svelte';

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
						<h1 class="text-white-100 text-3xl font-bold mt-3">{userData.displayName ? userData.displayName : userData.username}</h1>
					</div>
                    <p class="text-white-100 text-sm font-semibold py-3 opacity-70 max-w-[68ch]">
						{userData.bio}
					</p>
					<div class="flex mt-5 gap-4 overflow-x-auto flex-wrap">
                        <Pill label={`${userData.username}`}>
                            <AtSymbolIcon customClasses="w-5 h-5" />
                        </Pill>
                        <Pill label={`Joined ${Sugar.Date.relative(new Date(userData.createdAt))}`}>
                            <CalendarIcon customClasses="w-5 h-5" />
                        </Pill>
					</div>
				</div>
			</div>
				
			<div class="sm:p-8 bg-primary-850 rounded-md sm:pl-16 px-3 py-4 w-full">
				<h2 class="text-white-100 text-lg font-bold">Mods by {userData.displayName ? userData.displayName : userData.username}</h2>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme('colors.zinc.900');
	}
</style>