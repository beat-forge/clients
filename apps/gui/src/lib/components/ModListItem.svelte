<script lang="ts">
	import Sugar from 'sugar';
	import { CalendarIcon, DownloadIcon, LogoIcon, NotVerifiedIcon, VerifiedIcon, CogIcon, CubeIcon, ChevronDownIcon, CategoryIcon } from 'ui/icons';
	import { Button } from 'ui/button';
	import { Pill } from 'ui/pill';
    import { Link } from 'ui/link';

    import { slide, fly } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';

	export let name: string;
    export let slug: string;
	export let author: {
		username: string;
	};
	export let description: string;
	export let category: string;
	export let downloads: any;
	export let updatedAt: number
	export let icon: string;

    let updatedAtProper: string;
    try {
        updatedAtProper = Sugar.Date.relative(new Date(updatedAt * 1000))
    } catch (e) {
        // @ts-ignore
        updatedAtProper = Sugar.Date.relative(new Date(Date.parse(updatedAt * 1000)))
    }
</script>

<a href={`/mod/${slug}`}>
    <div
	    class="beatforge-discover-list-item flex flex-row gap-2 md:gap-4 w-full bg-primary-800 hover:bg-primary-850 border-b-[1px] border-primary-850 items-center p-2 md:p-4 min-w-0 transition hover:duration-[0ms] duration-[120ms] my-2 md:my-0 rounded-lg md:rounded-none">
        <div
            class="beatforge-discover-list-item-image h-12 w-12 md:h-16 md:w-16 bg-primary-600 flex flex-shrink-0 overflow-hidden rounded-md mr-2"
        >
            <img
                alt={`Listing for mod ${name}, created by ${author}`}
                src={icon ? icon : '/images/unknown.svg'}
                class="w-full h-full object-fill"
            />
        </div>
        <div class="beatforge-discover-list-item-info w-full flex flex-col gap-1 md:gap-1 min-w-0 truncate">
            <div class="beatforge-discover-list-item-info-title flex items-center gap-2">
                <h2 class="font-black text-md md:text-xl">{name}</h2>
                <p class="text-xs text-primary-200">by {author}</p>
            </div>
            <div class="beatforge-discover-list-item-description flex min-w-0">
                <p class="text-xs text-primary-200 truncate min-w-0 font-medium">
                    {description}
                </p>
            </div>
        </div>
        <div class="beatforge-discover-list-item-pills flex flex-col gap-1 bg-primary-850 p-1 rounded-md overflow-x-auto min-w-[130px] whitespace-nowrap">
            <!-- <div class="flex flex-row gap-1 items-center text-xs text-primary-200">
                <CategoryIcon customClasses="w-4 h-4" />
                {category} 
            </div> -->
            <div class="flex flex-row gap-1 items-center text-xs text-primary-200">
                <DownloadIcon customClasses="flex-shrink-0 w-4 h-4" />
                {downloads} Downloads
            </div>
            <div class="flex flex-row gap-1 items-center text-xs text-primary-200">
                <CalendarIcon customClasses="flex-shrink-0 w-4 h-4" />
                {updatedAtProper}
            </div>
        </div>
    </div>
</a>
