<script>
	import FeatureSection from '$lib/components/landing/FeatureSection.svelte';
	import LandingDescription from '$lib/components/landing/LandingDescription.svelte';
	import LandingHeading from '$lib/components/landing/LandingHeading.svelte';

	import IntersectionObserver from '$lib/components/IntersectionObserver.svelte';

	import { DownloadIcon } from 'ui/icons';

	let textTransition = 'translate-y-[32px] opacity-30 duration-[400ms]';
	let headerTransition = 'translate-y-[32px] opacity-30 duration-[400ms]';
</script>

<div
	style="background: radial-gradient(ellipse 100% 40% at 50% 60%,rgb(246 99 220 / 7%),var(--transparent)); margin-top: 64px;"
>
	<FeatureSection>
		<IntersectionObserver
			once={true}
			class="flex flex-col justify-center items-center text-center gap-8"
			let:intersecting
			top={0}
		>
			<h2 class="landing-gradient-eyebrow font-bold text-sm uppercase tracking-wider">Client</h2>
			<LandingHeading>
				<div class="transition duration-[500ms] delay-300 {intersecting ? '' : headerTransition}">
					BeatForge Client is your ultimate modding companion.
				</div>
			</LandingHeading>

			<LandingDescription>
				<p class="transition duration-[500ms] delay-300 {intersecting ? '' : textTransition}">
					BeatForge Client is the best way to discover, install, and manage your mods. Free,
					open-source, and incredibly fast.
				</p>
			</LandingDescription>

			<div class="flex items-center justify-center bg-[#2C2B30] px-4 py-2 rounded-full gap-2">
				<DownloadIcon className="w-4 h-4" />
				<p class="p-1 text-sm font-bold text-white">Download Now</p>
			</div>

			<div class="relative transform-gpu">
				<div class="absolute inset-0 app_ss_shadow" />
				<img src="/images/app_screenshot.png" class="w-full object-fit" alt="app screenshot" />
			</div>
		</IntersectionObserver>
	</FeatureSection>
</div>
