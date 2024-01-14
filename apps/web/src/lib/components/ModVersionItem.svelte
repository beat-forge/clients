<script lang="ts">
	import Sugar from 'sugar';
	import { CalendarIcon, DownloadIcon, LogoIcon, NotVerifiedIcon, VerifiedIcon, CogIcon, CubeIcon, ChevronDownIcon } from 'ui/icons';
	import { Button } from 'ui/button';
	import { Pill } from 'ui/pill';
    import { Link } from 'ui/link';

    import { slide, fly } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';

	export let versionName: string;
	export let downloads: any;
	export let createdAt: string;
	export let approved: boolean;
	export let downloadUrl: string;

	console.log(downloadUrl)

    let isHovered: boolean = false
</script>

<div role="presentation" class="beatforge-modversionitem-list-item flex flex-row gap-2 md:gap-4 w-full bg-primary-850 border-b-[1px] border-primary-800 items-center p-2 md:p-4 min-w-0 min-h-[129px] rounded-md group" on:mouseenter={() => isHovered = true} on:mouseleave={() => isHovered = false}>
	<div class="beatforge-modversionitem-list-item-info w-full flex flex-col gap-1 md:gap-2 min-w-0 truncate">
		<div class="beatforge-modversionitem-list-item-info-title flex items-center gap-4">
			<h2 class="font-black text-md md:text-2xl">{versionName}</h2>
			{#if approved}
				<VerifiedIcon customClasses="w-4 h-4 text-green-400" />
			{:else}
				<NotVerifiedIcon customClasses="w-6 h-6 text-red-400" />
			{/if}
		</div>
		<div class="beatforge-modversionitem-list-item-pills flex flex-row gap-2 overflow-x-auto">
			<Pill label={`${downloads} Downloads`}>
				<DownloadIcon customClasses="w-4 h-4" />
			</Pill>
			<Pill label={`Updated ${Sugar.Date.relative(new Date(createdAt))}`}>
				<CalendarIcon customClasses="w-4 h-4" />
			</Pill>
		</div>
    </div>
	<div class="hidden md:flex flex-col items-end w-1/3">
		<div class="beatforge-btn-wrapper flex flex-col rounded-lg overflow-hidden min-w-[199px] will-change-transform -mb-[4px]">
			<Button variant="gradient" customClasses="!rounded-[0px] will-change-transform">
				<LogoIcon customClasses="w-4 h-4" />
				<div class="text-sm font-bold will-change-transform">Download</div>
			</Button>
            {#if isHovered}
                <div class="flex flex-row gap-[2px] mt-[2px] opacity-0 group-hover:opacity-100 overflow-hidden rounded-b-lg will-change-transform" transition:slide={{ delay: 0, duration: 350, easing: quintOut, axis: 'y' }}>
                    <Button variant="secondary" customClasses="!rounded-[0px]" on:click={window.open(`${downloadUrl}/package`)}>
                        <CubeIcon customClasses="w-4 h-4" />
                        <div class="text-sm font-bold">Package</div>
                    </Button>
                    <Button variant="secondary" customClasses="!rounded-[0px]" on:click={window.open(`${downloadUrl}/dll`)}>
                        <CogIcon customClasses="w-4 h-4" />
                        <div class="text-sm font-bold">.DLL</div>
                    </Button>
                </div>
            {/if}
            <div class="bg-primary-800 group-hover:opacity-0 transition duration-[200ms] will-change-transform">
                <ChevronDownIcon customClasses="w-3 h-3 mx-auto group-hover:rotate-180 transition duration-[200ms]"></ChevronDownIcon>
            </div>
		</div>
	</div>
</div>
