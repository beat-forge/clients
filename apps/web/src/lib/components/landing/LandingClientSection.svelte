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

			<div class="relative transform-gpu backdrop-blur-lg h-[16rem] md:h-[40rem]">
				<div class="absolute inset-0 app_ss_shadow" />
				<img style="-webkit-mask-image: linear-gradient(black, transparent 70%);" src="/images/app_screenshot.png" class="w-full object-fit" alt="app screenshot" />
			</div>

			<div style="grid-template-columns: repeat(4, 1fr)" class="flex flex-col md:grid relative md:w-[calc(100%+48px)] ml-0 md:-ml-6 h-full -mt-8">
				<div class="features-gridlines">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
				<div data-beatforge-landing-client-featurecard-pos="1" class="flex flex-col gap-4 beatforge-landing-client-featurecard relative overflow-hidden p-8">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
						<path stroke-linecap="round" stroke-linejoin="round" d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
					  </svg>
					  <div class="font-bold text-md">Built for speed</div>
					  <div class="font-medium text-fore-muted">Our Rust-based client is incredibly lightweight. </div>
				</div>
				<div data-beatforge-landing-client-featurecard-pos="2" class="flex flex-col gap-4 beatforge-landing-client-featurecard relative overflow-hidden p-8">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
						<path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
					  </svg>
					  <div class="font-bold text-md">Integrations</div>
					  <div class="font-medium text-fore-muted">We work with the tools you already use, so you can focus on modding. </div>
				</div>
				<div data-beatforge-landing-client-featurecard-pos="3" class="flex flex-col gap-4 beatforge-landing-client-featurecard relative overflow-hidden p-8">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
						<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
					  </svg>
					  <div class="font-bold text-md">Frictionless search</div>
					  <div class="font-medium text-fore-muted">Find anything you need at lightspeed. </div>
				</div>
				<div data-beatforge-landing-client-featurecard-pos="4" class="flex flex-col gap-4 beatforge-landing-client-featurecard relative overflow-hidden p-8">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
						<path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
					  </svg>
					  <div class="font-bold text-md">Beautifully designed </div>
					  <div class="font-medium text-fore-muted">Your tools should be intuitive, natural, and aesthetically pleasing. </div>
				</div>
			</div>
		</IntersectionObserver>
	</FeatureSection>
</div>
