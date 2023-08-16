<script>
	import FeatureSection from '$lib/components/landing/FeatureSection.svelte';
	import LandingDescription from '$lib/components/landing/LandingDescription.svelte';
	import LandingHeading from '$lib/components/landing/LandingHeading.svelte';

	import IntersectionObserver from '$lib/components/IntersectionObserver.svelte';

	import { DownloadIcon, LogoIcon } from 'ui/icons';
	import { Link } from 'ui/link';

	let textTransition = 'translate-y-[32px] opacity-30 duration-[400ms]';
	let headerTransition = 'translate-y-[32px] opacity-30 duration-[400ms]';
</script>

<div
	style="background: radial-gradient(ellipse 100% 50% at 80% 50%,rgba(236, 93, 59, 0.12),var(--transparent)), radial-gradient(ellipse 100% 40% at 20% 50%,rgba(210, 99, 246, 0.08),var(--transparent)); margin-top: 256px;"
>
	<FeatureSection>
		<h2 class="-mb-8 text-sm font-bold tracking-wider uppercase landing-gradient-eyebrow hue-rotate-90">About Us</h2>
		<IntersectionObserver
			once={true}
			class="flex flex-col justify-center gap-12"
			let:intersecting
			top={-250}
		>
			<LandingHeading>
				<h1 class="transition duration-[500ms] delay-300 {intersecting ? '' : headerTransition}">
					We're an indie team of passionate developers.
				</h1>
			</LandingHeading>

			<LandingDescription>
				<p class="transition duration-[500ms] delay-300 {intersecting ? '' : textTransition}">
                    Our mission is to radically improve the way you mod Beat Saber. Nobody has got it quite right yet, but we believe that, with the help of our users and developers, we can forge a truly revolutionary platform. We'd love your help.
				</p>
			</LandingDescription>
		</IntersectionObserver>

        <Link variant="primary">
			<p class="p-1 text-sm font-bold">Get Involved</p>
		</Link>

		<IntersectionObserver once={true} let:intersecting top={0}>
            <div class="relative bg-[#ffffff05] backdrop-blur-md rounded-full shadow-2xl">
                <div class="hidden md:block team-section rising-stars" aria-hidden="true">
                    <div style="height:2px; width:1px;"></div>
                    <div style="height:2px; width:1px;"></div>
                    <div style="height:2px; width:1px;"></div>
                </div>
                <div class="beatforge-team-section p-8">
                    <div class="flex flex-row items-center justify-center">
                        <img src="https://avatars.githubusercontent.com/u/24845326?v=4" class="rounded-full h-16 w-16 border-4 border-black" alt="Avatar of Checksum - BeatForge Core Team">
                        <img src="https://avatars.githubusercontent.com/u/25761442?v=4" class="rounded-full h-16 w-16 -ml-4 border-4 border-black bg-black" alt="Avatar of Wamy - BeatForge Core Team">
                        <img src="https://avatars.githubusercontent.com/u/57552273?v=4" class="rounded-full h-16 w-16 -ml-4 border-4 border-black bg-black" alt="Avatar of Sargon - BeatForge Core Team">
                        <img src="https://avatars.githubusercontent.com/u/52982404?v=4" class="rounded-full h-16 w-16 -ml-4 border-4 border-black bg-black" alt="Avatar of fero - BeatForge Core Team">
                    </div>
                </div>
            </div>
		</IntersectionObserver>
	</FeatureSection>
</div>
