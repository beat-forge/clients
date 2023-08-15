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

    try {
        updatedAt = Sugar.Date.relative(new Date(updatedAt * 1000))
    } catch (e) {
        updatedAt = Sugar.Date.relative(new Date(Date.parse(updatedAt * 1000)))
    }
</script>

<a href={`/mod/${slug}`}>
    <div
	    class="beatforge-discover-list-item flex flex-row gap-2 md:gap-4 w-full bg-primary-800 hover:bg-primary-850 border-b-[1px] border-primary-850 items-center p-2 md:p-4 min-w-0 transition hover:duration-[0ms] duration-[120ms] my-2 md:my-0 rounded-lg md:rounded-none">
        <div
            class="beatforge-discover-list-item-image h-12 w-12 md:h-24 md:w-24 bg-primary-600 flex flex-shrink-0 overflow-hidden rounded-md mr-2"
        >
            <img
                alt={`Listing for mod ${name}, created by ${author}`}
                src={icon ? icon : '/images/unknown.svg'}
                class="w-full h-full object-fill"
            />
        </div>
        <div class="beatforge-discover-list-item-info w-full flex flex-col gap-1 md:gap-2 min-w-0 truncate">
            <div class="beatforge-discover-list-item-info-title flex items-center gap-4">
                <h2 class="font-black text-md md:text-2xl">{name}</h2>
                <p class="text-sm text-primary-200">by {author}</p>
            </div>
            <div class="beatforge-discover-list-item-description flex min-w-0">
                <p class="text-sm text-primary-200 truncate min-w-0 font-medium">
                    {description}
                </p>
            </div>
            <div class="beatforge-discover-list-item-pills flex flex-row gap-2 overflow-x-auto">
                <Pill label={category} customClasses="capitalize">
                    <CategoryIcon customClasses="w-4 h-4" />
                </Pill>
                <Pill label={`${downloads} Downloads`}>
                    <DownloadIcon customClasses="w-4 h-4" />
                </Pill>
                <Pill label={`Updated ${updatedAt}`}>
                    <CalendarIcon customClasses="w-4 h-4" />
                </Pill>
            </div>
        </div>
    </div>
</a>
