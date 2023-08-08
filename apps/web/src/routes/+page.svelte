<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<script>
	import FeatureSection from '$lib/components/landing/FeatureSection.svelte';
	import LandingDescription from '$lib/components/landing/LandingDescription.svelte';
	import LandingHeading from '$lib/components/landing/LandingHeading.svelte';
	import VideoPlayer from '$lib/components/landing/LandingVideo.svelte';

	import IntersectionObserver from '$lib/components/IntersectionObserver.svelte';

	import { DownloadIcon } from 'ui'
	import { onMount } from 'svelte';

	let textTransition = 'translate-y-[32px] opacity-30 duration-[400ms]';
	let headerTransition = 'translate-y-[32px] opacity-30 duration-[400ms]';

	onMount(() => {
		// @ts-ignore
		document.getElementById("cards").onmousemove = e => {
			for(const card of document.getElementsByClassName("beatforge-landing-bentobox-item")) {
				const rect = card.getBoundingClientRect(),
					x = e.clientX - rect.left,
					y = e.clientY - rect.top;

				// @ts-ignore
				card.style.setProperty("--mouse-x", `${x}px`);
				// @ts-ignore
				card.style.setProperty("--mouse-y", `${y}px`);
			};
		}
	})
</script>

<VideoPlayer />
<div
	aria-hidden="true"
	class="beatforge-landing-rainbow-glow hue-rotate-animation absolute -top-[90px] opacity-50"
>
	<div
		class="beatforge-landing-rainbow-glow-item absolute hidden sm:w-screen rounded-[100%] blur-3xl -left-[500px] h-[220px] opacity-[0.15]"
		style="background: linear-gradient(180deg,#58a5ff,#a67af4)"
	/>
	<div
		class="beatforge-landing-rainbow-glow-item absolute hidden sm:w-screen rounded-[100%] blur-3xl -right-[500px] h-[220px] opacity-[0.15]"
		style="background: linear-gradient(180deg,#ff3358,#ff4fd8)"
	/>
</div>

<main class="beatforge-landing-wrapper relative w-full h-full">
	<div
		class="relative beatforge-landing-cta-wrapper"
		style="background: radial-gradient(140% 107.13% at 50% 10%, transparent 37.41%, rgb(0, 0, 0) 69.27%, rgb(0, 0, 0) 100%);"
	>
		<div
			class="relative beatforge-landing-cta h-screen flex flex-col items-center justify-center w-full gap-12 px-4 mx-auto text-center sm:px-8 pt-48 pb-12 max-w-7xl -mt-[112px] min-h-[727px]"
		>
			<h1
				class="beatforge-landing-header-responsive max-w-[700px] text-5xl font-black leading-[1.25] tracking-wide"
			>
				The most seamless modding platform for Beat Saber
			</h1>
			<div class="max-w-[600px] text-[#8B888C] font-medium text-xl leading-[1.5]">
				Discover, create, and share mods with BeatForge, the transparent, open-source modding
				platform.
			</div>

			<div class="flex flex-row gap-4">
				<a
					class="flex items-center justify-center bg-white text-black-950 px-4 py-2 rounded-full gap-2 opacity-50 pointer-events-none select-none"
				>
					<DownloadIcon className="w-4 h-4 text-black" />
					<p class="p-1 text-sm font-bold text-black">Download Client</p>
				</a>
				<a
					href="https://github.com/beat-forge"
					class="flex items-center justify-center bg-[#2C2B3077] px-4 py-2 rounded-full gap-2"
					target="_blank"
					rel="noopener"
				>
					<p class="p-1 text-sm font-bold text-white">Source Code</p>
				</a>
			</div>
			<div class="opacity-50 mt-auto mb-8">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
					/>
				</svg>
			</div>
		</div>
	</div>

	<div
		style="background: radial-gradient(ellipse 100% 40% at 50% 60%,rgb(164 99 246 / 7%),var(--transparent)); margin-top: 128px;"
	>
		<FeatureSection>
			<h2
				class="beatforge-landing-std-eyebrow landing-gradient-eyebrow font-bold text-sm uppercase tracking-wider -mb-12"
			>
				Why BeatForge
			</h2>
			<IntersectionObserver
				once={true}
				class="flex flex-col justify-center items-center text-center gap-8"
				let:intersecting
				top={-250}
			>
				<LandingHeading>
					<div class="transition duration-[500ms] delay-300 {intersecting ? '' : headerTransition}">
						Everything you want from a mod manager. And so much more.
					</div>
				</LandingHeading>

				<LandingDescription>
					<p class="transition duration-[500ms] delay-300 {intersecting ? '' : textTransition}">
						From beginning to end, discovery to installation, BeatForge streamlines your modding
						experience with impeccable seamlessness.
					</p>
				</LandingDescription>
			</IntersectionObserver>

			<IntersectionObserver once={true} let:intersecting top={0}>
				<div
					class:beatforge-landing-bentobox-animated={intersecting}
					class="beatforge-landing-bentobox flex flex-col w-full gap-2 max-w-7xl"
					id="cards"
				>
					<div class="beatforge-landing-bentobox-row-first flex flex-row gap-2">
						<div
							class="beatforge-landing-bentobox-item text-left bg-[#19181B] w-full basis-1/2 p-4 sm:p-16 rounded-md"
						>
								<h3 class="mb-1 font-bold text-white">Open-source transparency.</h3>
								<p class="text-[#8B888C]">
									BeatForge won’t lock you in to our platform. Distribute where you want, when you
									want, and leave any time. Development is public, and always will be.
								</p>
						</div>
						<div
							class="beatforge-landing-bentobox-item text-left bg-[#19181B] w-full basis-1/2 p-4 sm:p-16 rounded-md"
						>
							<h3 class="mb-1 font-bold text-white">Crafted to perfection.</h3>
							<p class="text-[#8B888C]">
								Built with the bleeding edge of technology, BeatForge is a polished product built
								with unforgiving precision.
							</p>
						</div>
					</div>

					<div class="beatforge-landing-bentobox-row-second flex flex-row gap-2">
						<div
							class="beatforge-landing-bentobox-item text-left bg-[#19181B] w-full p-4 sm:p-16 rounded-md relative"
						>
							<img src="/images/app.png" class="absolute top-0 right-0" alt="application" />
							<div class="max-w-[330px] mt-[196px]">
								<h3 class="mb-1 font-bold text-white">Minimally designed with tasteful touches.</h3>
								<p class="text-[#8B888C]">
									We stay out of your way. Mod in less time, and play in no time.
								</p>
							</div>
							<div class="pointer-events-none w-full h-full absolute inset-0">
								<img
									class="pointer-events-none select-none z-[-1] w-full h-full object-cover rounded-md"
									src="/images/blurglow.png"
									alt="app"
								/>
							</div>
						</div>
					</div>

					<div class="beatforge-landing-bentobox-row-third flex flex-row gap-2">
						<div
							class="beatforge-landing-bentobox-item text-left bg-[#19181B] w-full basis-1/2 p-4 sm:p-16 rounded-md"
						>
							<h3 class="mb-1 font-bold text-white">Safe and secure.</h3>
							<p class="text-[#8B888C]">
								Manual human review and additional protections and verifications at the code level
								ensures that every mod featured is safe for your use.
							</p>
						</div>
						<div
							class="beatforge-landing-bentobox-item text-left bg-[#19181B] w-full basis-1/2 p-4 sm:p-16 rounded-md"
						>
							<h3 class="mb-1 font-bold text-white">Made for the future.</h3>
							<p class="text-[#8B888C]">
								Stagnation kills modding communities. We’re is in it for the long run. We’re
								building a solid foundation and a team that believes in open platforms.
							</p>
						</div>
					</div>
				</div>
			</IntersectionObserver>
		</FeatureSection>
	</div>

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

				<a
					href="/download"
					class="flex items-center justify-center bg-[#2C2B30] px-4 py-2 rounded-full gap-2"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-4 h-4"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
						/>
					</svg>

					<p class="p-1 text-sm font-bold text-white">Download Now</p>
				</a>

				<div class="relative transform-gpu">
					<div class="absolute inset-0 app_ss_shadow" />
					<img src="/images/app_screenshot.png" class="w-full object-fit" alt="app screenshot" />
				</div>
			</IntersectionObserver>
		</FeatureSection>
	</div>

	<div
		style="background: radial-gradient(ellipse 100% 60% at 50% 60%,rgb(164 99 246 / 7%),var(--transparent)); margin-top: 128px;"
	>
		<FeatureSection>
			<h2 class="landing-gradient-eyebrow font-bold text-sm uppercase tracking-wider -mb-12">
				CLI
			</h2>
			<IntersectionObserver
				once={true}
				class="flex flex-col justify-center items-center text-center gap-8"
				let:intersecting
				top={-250}
			>
				<LandingHeading>
					<div class="transition duration-[500ms] delay-300 {intersecting ? '' : headerTransition}">
						Tools that empower developers to build better, faster.
					</div>
				</LandingHeading>

				<LandingDescription>
					<p class="transition duration-[500ms] delay-300 {intersecting ? '' : textTransition}">
						BeatForge is built with developers in mind. A powerful CLI for publishing and managing
						your mods, friendly for automated scripts and CI/CD pipelines.
					</p>
				</LandingDescription>
			</IntersectionObserver>

			<IntersectionObserver once={true} let:intersecting top={0}>
				<div class="beatforge-landing-terminal-window-wrapper flex flex-col overflow-hidden rounded-xl w-full border-[2px] border-[#40434e]" style="filter: drop-shadow(0 0 100px #000000);">
					<div class="relative h-[54px] bg-[#19181b]">
						<div class="beatforge-landing-terminal-window-bullets flex h-full items-center ml-5" aria-hidden="true">
							<span />
							<span />
							<span />
						</div>
					</div>
					<div
						class="flex flex-col gap-2 font-mono bg-[#19181b] p-8 w-full max-w-3xl text-left relative select-none"
					>
					<div class="contents">
						<div class="flex flex-row items-center gap-4">
							<div class="text-sm select-none opacity-30" aria-hidden>$</div>
							<p
								class:beatforge-terminal-line-animated={intersecting}
								class="beatforge-terminal-line"
							>
								beatforge init <span class="select-none opacity-30"
									>// Create a new mod project with BSIPA</span
								>
							</p>
						</div>
						<div class="flex flex-row items-center gap-4">
							<div class="text-sm select-none opacity-30" aria-hidden>$</div>
							<p
								class:beatforge-terminal-line-animated-second={intersecting}
								class="beatforge-terminal-line"
							>
								beatforge publish <span class="select-none opacity-30"
									>// Publish your mod to BeatForge (you're done! 🎉)</span
								>
							</p>
						</div>

					</div>
						<a
							href="https://github.com/beat-forge/cli"
							class="relative flex items-center justify-center bg-[#2C2B30] px-4 py-2 rounded-full gap-2 mt-2"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-4 h-4"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
								/>
							</svg>

							<p class="p-1 text-sm font-bold text-white">Get the CLI</p>
						</a>
					</div>
				</div>
			</IntersectionObserver>
		</FeatureSection>
	</div>
</main>
