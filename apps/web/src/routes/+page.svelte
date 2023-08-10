<script>
	import LandingHeroVideo from '$lib/components/landing/LandingVideo.svelte';
	import LandingCTASection from '$lib/components/landing/LandingCTASection.svelte';
	import LandingBentoSection from '$lib/components/landing/LandingBentoSection.svelte';
	import LandingClientSection from '$lib/components/landing/LandingClientSection.svelte';
	import LandingCLISection from '$lib/components/landing/LandingCLISection.svelte';
</script>

<svelte:head>
	<title>BeatForge</title>
	<meta name="description" content="The most seamless modding platform for Beat Saber." />
</svelte:head>

<main class="beatforge-landing-wrapper relative w-full h-full">
	<LandingHeroVideo />

	<LandingCTASection />
	<LandingBentoSection />

	<LandingClientSection />

	<LandingCLISection />
</main>
