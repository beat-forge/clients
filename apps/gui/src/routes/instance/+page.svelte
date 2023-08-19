<script lang="ts">
	import { ArrowSmallRightIcon, CalendarIcon, CategoryIcon, DotsIcon, Pill } from 'ui';
	import { Button } from 'ui/button';

    // get pathname from +page.ts
    import type { PageData } from './$types';
	export let data: PageData;
    export let pathname: string = '';

	/// TODO!
	// get instance name from DB via slug
	// display information here (path, version)
	// useful links and stuff (like invoking file explorer at instance folder, launch game, discover for instance, etc.)
</script>

<div class="mx-auto w-full max-w-7xl px-6">
	<div class="beatforge-discover-header-wrapper">
		<div class="mt-4 flex flex-row items-center justify-between">
			<div class="flex flex-col gap-2">
				<h1 class="relative z-[2] text-4xl font-black leading-[1.25] tracking-wide">
					{data.instanceName}
				</h1>
				<!-- Do we track this stuff? -->
				<div class="flex flex-row gap-2">
					<Pill label="1.28.0" customClasses="capitalize">
						<CategoryIcon customClasses="w-5 h-5" />
					</Pill>
					<Pill label={`Created 2 hours ago`}>
						<CalendarIcon customClasses="w-5 h-5" />
					</Pill>
				</div>
			</div>

			<div class="relative z-[2] mt-2 flex flex-row gap-4 fill-white">
				<Button>
					<DotsIcon customClasses="w-6 h-6" />
					<!-- Dropdown: open folder in explorer, copy path, delete instance, check for mod updates (?) -->
				</Button>
				<!-- <Button variant="primary" customClasses="w-fit whitespace-nowrap">Launch</Button> -->
			</div>
		</div>

        <!-- pass instance version/name via query param(?) -->
		<a href="/discover">
			<div
				class="bg-primary-800 mt-10 flex flex-row items-center justify-between gap-2 rounded-md p-4"
			>
				<h2 class="text-white-100 text-lg font-bold">Find Mods</h2>
				<ArrowSmallRightIcon customClasses="w-6 h-6" />
			</div>
		</a>

		<div class="bg-primary-800 mt-4 flex flex-col rounded-md p-4">
			<h2 class="text-white-100 text-lg font-bold">Installed Mods</h2>
			<!-- for each installed mod in instance, make a modlistitem -->
		</div>
	</div>
</div>
