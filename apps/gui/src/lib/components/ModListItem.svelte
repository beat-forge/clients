<script lang="ts">
	import { DownloadIcon } from 'ui/icons';
        
	export let name: string;
	export let slug: string;
	export let author: {
		username: string;
	};
	export let description: string;
	export let category: string;
	export let downloads: any;
	export let icon: string;
</script>

<a href={`/mod/${slug}`}>
	<div
		class="beatforge-discover-list-item bg-primary-800 hover:bg-primary-850 border-primary-850 my-2 flex w-full min-w-0 flex-row items-center gap-2 rounded-lg border-b-[1px] p-2 transition duration-[120ms] hover:duration-[0ms] md:my-0 md:gap-4 md:rounded-none md:p-4"
	>
		<div
			class="flex flex-shrink-0 w-12 h-12 mr-2 overflow-hidden rounded-md beatforge-discover-list-item-image bg-primary-600 md:h-16 md:w-16"
		>
			<img
				alt={`Listing for mod ${name}, created by ${author}`}
				src={icon ? icon : '/images/unknown.svg'}
				class="object-cover w-full h-full"
			/>
		</div>
		<div
			class="flex flex-col w-full min-w-0 gap-1 truncate beatforge-discover-list-item-info md:gap-1"
		>
			<div class="flex items-center gap-2 beatforge-discover-list-item-info-title">
				<h2 class="font-black text-md md:text-xl">{name}</h2>
				<p class="text-xs text-primary-200">by {author}</p>
			</div>
			<div class="flex min-w-0 beatforge-discover-list-item-description">
				<p class="min-w-0 text-xs font-medium truncate text-primary-200">
					{description}
				</p>
			</div>
		</div>
		<div
			class="beatforge-discover-list-item-pills bg-primary-850 flex min-w-[130px] flex-col gap-1 overflow-x-auto whitespace-nowrap rounded-md p-1"
		>
			<!-- <div class="flex flex-row items-center gap-1 text-xs text-primary-200">
                <CategoryIcon customClasses="w-4 h-4" />
                {category} 
            </div> -->
			<div class="flex flex-row items-center gap-1 text-xs text-primary-200">
				<DownloadIcon customClasses="flex-shrink-0 w-4 h-4" />
				{downloads} Downloads
			</div>
			<div class="flex flex-row items-center gap-1 text-xs text-primary-200">
				{category}
			</div>
		</div>
	</div>
</a>
