<script>
	import FeatureSection from '$lib/components/landing/FeatureSection.svelte';
	import LandingDescription from '$lib/components/landing/LandingDescription.svelte';
	import LandingHeading from '$lib/components/landing/LandingHeading.svelte';

	import IntersectionObserver from '$lib/components/IntersectionObserver.svelte';

	import { DownloadIcon } from 'ui/icons';
	import { Link } from 'ui/link';

	let textTransition = 'translate-y-[32px] opacity-30 duration-[400ms]';
	let headerTransition = 'translate-y-[32px] opacity-30 duration-[400ms]';
</script>

<div
	style="background: radial-gradient(ellipse 100% 40% at 50% 60%,rgb(246 99 220 / 7%),var(--transparent)); margin-top: 64px;"
>
	<FeatureSection>
		<IntersectionObserver
			once={true}
			class="flex flex-col justify-center gap-12"
			let:intersecting
			top={0}
		>
			<h2 class="text-sm font-bold tracking-wider uppercase landing-gradient-eyebrow">Client</h2>
			<LandingHeading>
				<h1 class="transition duration-[500ms] delay-300 {intersecting ? '' : headerTransition}">
					Your ultimate modding companion for Beat Saber.
				</h1>
			</LandingHeading>

			<LandingDescription>
				<p class="transition duration-[500ms] delay-300 {intersecting ? '' : textTransition}">
					Built with a steadfast focus on performance and usability, BeatForge Client is the best way to install and manage your mods. Made with Rust, not Electron.
				</p>
			</LandingDescription>

            <Link variant="primary">
                <DownloadIcon customClasses="w-4 h-4 " />
                <p class="p-1 text-sm font-bold">Download Now</p>
            </Link>

			<div class="relative transform-gpu h-96">
				<div class="absolute inset-0 app_ss_shadow" />
				<img style="-webkit-mask-image: linear-gradient(black, transparent 70%);" src="/images/app_screenshot.png" class="w-full object-fit" alt="app screenshot" />
			</div>
		</IntersectionObserver>
	</FeatureSection>
</div>
