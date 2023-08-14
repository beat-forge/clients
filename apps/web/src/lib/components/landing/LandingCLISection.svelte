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
	style="background: radial-gradient(ellipse 100% 60% at 50% 60%,rgb(246 99 115 / 9%),var(--transparent)); margin-top: 128px;"
>
	<FeatureSection>
		<h2 class="-mb-8 text-sm font-bold tracking-wider uppercase landing-gradient-eyebrow">CLI</h2>
		<IntersectionObserver
			once={true}
			class="flex flex-col justify-center gap-12"
			let:intersecting
			top={-250}
		>
			<LandingHeading>
				<h1 class="transition duration-[500ms] delay-300 {intersecting ? '' : headerTransition}">
					Empowering developers to build, test, and publish, faster.
				</h1>
			</LandingHeading>

			<LandingDescription>
				<p class="transition duration-[500ms] delay-300 {intersecting ? '' : textTransition}">
					Designed with developers in mind, the BeatForge CLI is a powerful tool that allows you to
					create, test, and publish mods, friendly for CI pipelines.
				</p>
			</LandingDescription>
		</IntersectionObserver>

		<Link variant="secondary">
			<DownloadIcon customClasses="w-4 h-4 " />
			<p class="p-1 text-sm font-bold">Get the CLI</p>
		</Link>

		<IntersectionObserver once={true} let:intersecting top={0}>
			<div style="background: linear-gradient(rgb(189 144 144 / 28%) 0%, rgba(0, 0, 0, 0) 100%);" class="relative w-full min-h-[350px] rounded-xl">
				<div
					class="beatforge-landing-terminal-window-wrapper flex flex-col overflow-hidden rounded-xl absolute inset-[1px]"
					style="box-shadow: 0px 22px 41px 11px rgba(0, 0, 0, 0.59); background: radial-gradient(98.00% 98.00% at 50.00% 2.00%, #030202 0%, #000 100%);"
				>
					<div class="relative h-[54px]">
						<div
							class="flex items-center h-full ml-5 beatforge-landing-terminal-window-bullets"
							aria-hidden="true"
						>
							<span />
							<span />
							<span />
						</div>
					</div>
					<div class="flex flex-col gap-2 font-mono p-8 w-full h-full justify-center text-left relative select-none">
						<div class="contents">
							<div class="opacity-40 text-white">
								It's as simple as...
							</div>
							<div class="terminal-row terminal-row-first flex flex-row items-center gap-4 w-fit">
								<div class:beatforge-terminal-line-animated={intersecting}>
									<LogoIcon customClasses="w-4 h-4" />
								</div>
								<div class="">~/</div>
								<p
									class:beatforge-terminal-line-animated={intersecting}
									class="beatforge-terminal-line-first"
								>
									beatforge init
								</p>
								<div class:blinking-cursor-animated={intersecting} class="blinking-cursor-first" />
							</div>
							<div class="terminal-row terminal-row-second flex flex-row items-center gap-4 w-fit">
								<div class="beatforge-terminal-line-second" class:beatforge-terminal-line-animated={intersecting}>
									<LogoIcon customClasses="w-4 h-4" />
								</div>
								<div class="beatforge-terminal-line-second" class:beatforge-terminal-line-animated={intersecting}>~/</div>
								<p
									class:beatforge-terminal-line-animated={intersecting}
									class="beatforge-terminal-line-second"
								>
									beatforge publish
								</p>
								<div class:blinking-cursor-animated={intersecting} class="blinking-cursor-second" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</IntersectionObserver>
	</FeatureSection>
</div>
