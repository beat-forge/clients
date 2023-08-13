<script>
	import FeatureSection from '$lib/components/landing/FeatureSection.svelte';
	import LandingDescription from '$lib/components/landing/LandingDescription.svelte';
	import LandingHeading from '$lib/components/landing/LandingHeading.svelte';

	import IntersectionObserver from '$lib/components/IntersectionObserver.svelte';

	import { DownloadIcon } from 'ui/icons';
	import { Link } from 'ui/link'

	let textTransition = 'translate-y-[32px] opacity-30 duration-[400ms]';
	let headerTransition = 'translate-y-[32px] opacity-30 duration-[400ms]';
</script>

<div
	style="background: radial-gradient(ellipse 100% 60% at 50% 60%,rgb(164 99 246 / 7%),var(--transparent)); margin-top: 128px;"
>
	<FeatureSection>
		<h2 class="-mb-12 text-sm font-bold tracking-wider uppercase landing-gradient-eyebrow">CLI</h2>
		<IntersectionObserver
			once={true}
			class="flex flex-col items-center justify-center gap-8 text-center"
			let:intersecting
			top={-250}
		>
			<LandingHeading>
				<h1 class="transition duration-[500ms] delay-300 {intersecting ? '' : headerTransition}">
					Tools that empower developers to build better, faster.
				</h1>
			</LandingHeading>

			<LandingDescription>
				<p class="transition duration-[500ms] delay-300 {intersecting ? '' : textTransition}">
					BeatForge is built with developers in mind. A powerful CLI for publishing and managing
					your mods, friendly for automated scripts and CI/CD pipelines.
				</p>
			</LandingDescription>
		</IntersectionObserver>

		<IntersectionObserver once={true} let:intersecting top={0}>
			<div
				class="beatforge-landing-terminal-window-wrapper flex flex-col overflow-hidden rounded-xl w-full border-[2px] border-[#40434e]"
				style="filter: drop-shadow(0 0 100px #000000);"
			>
				<div class="relative h-[54px] bg-[#19181b]">
					<div
						class="flex items-center h-full ml-5 beatforge-landing-terminal-window-bullets"
						aria-hidden="true"
					>
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
					<Link variant="secondary">
						<DownloadIcon customClasses="w-4 h-4 " />
						<p class="p-1 text-sm font-bold">Get the CLI</p>
					</Link>
				</div>
			</div>
		</IntersectionObserver>
	</FeatureSection>
</div>
