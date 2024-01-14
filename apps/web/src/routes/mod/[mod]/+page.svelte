<script lang="ts">
	import { Pill } from 'ui/pill';
	// @ts-nocheck
	import type { PageData } from './$types';
	import { copiedState } from '$lib/stores/mod';
	export let data: PageData;
    export let modData = data.body.data;
	import Sugar from 'sugar';
    import { fade } from 'svelte/transition';
    import { CalendarIcon, PersonIcon, DownloadIcon, CopyIcon, GithubIcon, CheckmarkIcon, CategoryIcon } from 'ui/icons';
    import { Button } from 'ui/button';
	import ModVersionItem from '$lib/components/ModVersionItem.svelte';
	const handleCopy = () => {
		navigator.clipboard.writeText(modData.id)
		copiedState.set(true)

		setTimeout(() => {
			copiedState.set(false)
		}, 2500)
	}

</script>

<div class="h-full w-full">
	<div class="flex justify-center">
		<div class="flex flex-col gap-2 w-full max-w-7xl px-4">
			<div
				class={`max-w-3xl min-w-full h-56 cover flex justify-center p-3 rounded-t-md ${
					modData.cover ? `bg-[url(${modData.cover})]` : 'bg-[url("/images/glowheader.svg")]'
				} bg-center`}
			/>
			<div class="flex flex-row p-4 bg-primary-850 h-20 justify-between -mt-4">
				<div class="sm:ml-12 -mt-20">
					<img
						src={modData.icon ? modData.icon : '/images/unknown.svg'}
						alt="icon"
						class="w-32 border-primary-850 border-4 rounded-md"
					/>
				</div>
				<div class="">
                    <Button variant="gradient" customClasses="text-xs sm:text-md">
                        Download in Client
                        <p slot="trailing" class="rounded-3xl ml-2 px-2 py-1 bg-[#ffffff44]">v0</p>
                    </Button>
				</div>
			</div>
			<div class="flex -mt-4 p-4 pb-8 bg-primary-850 rounded-b-md">
				<div class="sm:ml-12 overflow-hidden">
					<div class="flex">
						<h1 class="text-4xl mt-2 font-black leading-[1.25] tracking-wide">{modData.name}</h1>
					</div>
					<div class="flex mt-5 gap-4 overflow-x-auto flex-wrap">
						<a href={`/profile/${modData.author.id}`} class="whitespace-nowrap">
                            <Pill label={`by ${modData.author.username}`}>
                                <PersonIcon customClasses="w-5 h-5" />
                            </Pill>
						</a>
                        <Pill label={`${Sugar.Number.abbr(modData.stats.downloads)} Downloads`}>
                            <DownloadIcon customClasses="w-5 h-5" />
                        </Pill>
                        <Pill label={`Updated ${Sugar.Date.relative(new Date(modData.updatedAt))}`}>
                            <CalendarIcon customClasses="w-5 h-5" />
                        </Pill>
					</div>
				</div>
			</div>
			<div class="flex flex-col md:flex-row gap-2">
				<div class="sm:p-8 bg-primary-850 rounded-md sm:pl-16 px-3 py-4 w-full">
					<h2 class="text-white-100 text-lg font-bold">About</h2>
					<p class="text-white-100 text-sm font-semibold py-3 opacity-70 max-w-[68ch]">
						{modData.description}
					</p>
				</div>
				<div class="sm:p-8 bg-primary-850 rounded-md sm:pl-16 px-3 py-4 w-full md:w-2/5">
					<h2 class="text-white-100 text-lg font-bold">Details</h2>
					<div class="flex flex-col gap-2 py-3">
                        <a href={modData.github} target="_blank">
                            <Pill label="View GitHub">
                                <GithubIcon customClasses="w-5 h-5 fill-primary-50" />
                            </Pill>
                        </a>
                        <Button variant="pill" customClasses={`copy-button grid cursor-pointer`} on:click={handleCopy}>
                            {#if $copiedState}
                                <div class:copy-button-active={$copiedState} class="flex items-center gap-2" transition:fade={{ duration: 75 }}>
                                    <CheckmarkIcon customClasses="w-5 h-5" />
                                    Copied!
                                </div>

                            {:else}
                                <div class:copy-button-active={$copiedState} class="flex items-center gap-2" transition:fade={{ duration: 75 }}>
                                    <CopyIcon customClasses="w-5 h-5" />
                                    Copy ID
                                </div>
                            {/if}
                        </Button>
                        <Pill label={`Created ${Sugar.Date.relative(new Date(modData.createdAt))}`}>
                            <CalendarIcon customClasses="w-5 h-5" />
                        </Pill>
                        <Pill label={modData.category.name} customClasses="capitalize" >
                            <CategoryIcon customClasses="w-5 h-5" />
                        </Pill>
					</div>
				</div>
			</div>
			<div class="sm:p-8 bg-primary-850 rounded-md sm:pl-16 px-3 py-4 w-full">
				<h2 class="text-white-100 text-lg font-bold mb-4">Versions</h2>
				{#each modData.versions as version}
					<ModVersionItem versionName={version.version} downloads={version.stats.downloads} createdAt={version.createdAt} approved={version.approved} downloadUrl={version.downloadUrl} />
				{/each}
			</div>
		</div>
	</div>
</div>