<script>
	import LandingHeroVideo from '$lib/components/landing/LandingVideo.svelte';
	import LandingCTASection from '$lib/components/landing/LandingCTASection.svelte';
	import LandingBentoSection from '$lib/components/landing/LandingBentoSection.svelte';
	import LandingClientSection from '$lib/components/landing/LandingClientSection.svelte';
	import LandingCLISection from '$lib/components/landing/LandingCLISection.svelte';
	import LandingAboutSection from '$lib/components/landing/LandingAboutSection.svelte';
	import LandingLastSection from '$lib/components/landing/LandingLastSection.svelte';
</script>

<svelte:head>
	<title>BeatForge</title>
	<meta name="description" content="The most seamless modding platform for Beat Saber." />
</svelte:head>

<main class="beatforge-landing-wrapper relative w-full h-full">
	<LandingHeroVideo />

	<LandingCTASection />

	<div class="relative beatforge-landing-conversion-sections">
		<div data-beatforge-landing-screen-fade-direction="left" style="background: linear-gradient(to right, black, transparent 70%)" class="opacity-0 2xl:opacity-100 transition duration-[200ms] z-10 absolute w-64 h-full top left-0 pointer-events-none select-none" aria-hidden="true"></div>
		<div data-beatforge-landing-screen-fade-direction="right" style="background: linear-gradient(to left, black, transparent 70%)" class="opacity-0 2xl:opacity-100 transition duration-[200ms] z-10 absolute w-64 h-full top right-0 pointer-events-none select-none" aria-hidden="true"></div>
		<div data-beatforge-landing-screen-fade-direction="top" style="background: linear-gradient(black, transparent 70%)" class="z-10 absolute w-full h-32 -top-4 left-0 right-0 pointer-events-none select-none" aria-hidden="true"></div>
		<LandingBentoSection />

		<LandingClientSection />

		<LandingCLISection />

		<LandingAboutSection />

		<LandingLastSection />
		<div data-beatforge-landing-screen-fade-direction="bottom" style="background: linear-gradient(transparent, black 70%)" class="z-10 absolute w-full h-32 bottom-0 left-0 right-0 pointer-events-none select-none" aria-hidden="true"></div>
	</div>
</main>

<div class="hidden xl:block absolute max-w-[calc(79rem)] w-full h-[calc(100%-100vh)] mx-auto left-0 right-0 top-[100vh] bottom-0 border-x-2 border-dashed border-[#ffffff11] pointer-events-none select-none" aria-hidden="true"></div>
