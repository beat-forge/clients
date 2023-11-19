<script>
	import FeatureSection from '$lib/components/landing/FeatureSection.svelte';
	import LandingHeading from '$lib/components/landing/LandingHeading.svelte';
	import LandingDescription from '$lib/components/landing/LandingDescription.svelte';
	import IntersectionObserver from '$lib/components/IntersectionObserver.svelte';

	let textTransition = 'translate-y-[32px] opacity-30 duration-[400ms]';
	let headerTransition = 'translate-y-[32px] opacity-30 duration-[400ms]';

	import { onMount } from 'svelte';

	onMount(() => {
		// @ts-ignore
		document.getElementById('cards').onmousemove = (e) => {
			for (const card of document.getElementsByClassName('beatforge-landing-bentobox-item')) {
				const rect = card.getBoundingClientRect(),
					x = e.clientX - rect.left,
					y = e.clientY - rect.top;

				// @ts-ignore
				card.style.setProperty('--mouse-x', `${x}px`);
				// @ts-ignore
				card.style.setProperty('--mouse-y', `${y}px`);
			}
		};
	});
</script>

<div
	style="background: radial-gradient(ellipse 100% 50% at 80% 50%,rgb(164 99 246 / 12%),var(--transparent)), radial-gradient(ellipse 100% 40% at 20% 50%,rgb(210 99 246 / 8%),var(--transparent)); margin-top: 128px;"
>
	<FeatureSection>
		<h2
			class="-mb-8 text-sm font-bold tracking-wider uppercase beatforge-landing-std-eyebrow landing-gradient-eyebrow"
		>
			Why BeatForge
		</h2>
		<IntersectionObserver
			once={true}
			class="flex flex-col justify-center gap-12"
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
					Welcome to the first mod manager you'll actually want to use. BeatForge's powerful yet
					simple interface makes discovering and installing mods a breeze. Every click, every
					interaction, and every click is designed with unforgiving precision.
				</p>
			</LandingDescription>
		</IntersectionObserver>

		<IntersectionObserver once={true} let:intersecting top={0}>
			<div
				class:beatforge-landing-bentobox-animated={intersecting}
				class="relative flex flex-col w-full gap-2 beatforge-landing-bentobox max-w-7xl"
				id="cards"
			>
				<div class="absolute w-full h-full">
					<svg
						class="w-full h-full"
						width="1661"
						height="1222"
						viewBox="0 0 1661 1222"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						id="svg-227373486_786"
					>
						<path
							opacity="0.1"
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M0 0H1V1222H0V0ZM166 0H167V1222H166V0ZM333 0H332V1222H333V0ZM498 0H499V1222H498V0ZM665 0H664V1222H665V0ZM830 0H831V1222H830V0ZM997 0H996V1222H997V0ZM1162 0H1163V1222H1162V0ZM1329 0H1328V1222H1329V0ZM1494 0H1495V1222H1494V0ZM1661 0H1660V1222H1661V0Z"
							fill="url(#svg-227373486_786_paint0_linear_198_4354)"
						></path>
						<defs>
							<linearGradient
								id="svg-227373486_786_paint0_linear_198_4354"
								x1="830.5"
								y1="1.53129e-08"
								x2="831"
								y2="1222"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="white" stop-opacity="0"></stop>
								<stop offset="0.207857" stop-color="white" stop-opacity="0.792143"></stop>
								<stop offset="1" stop-color="white" stop-opacity="0"></stop>
							</linearGradient>
						</defs>
					</svg>
				</div>
				<div class="flex flex-col sm:flex-row gap-2 beatforge-landing-bentobox-row-first">
					<div
						class="beatforge-landing-bentobox-item text-left bg-[#ffffff11] w-full basis-1/2 p-4 sm:p-16 rounded-md"
					>
						<h3 class="mb-1 font-bold text-white">Open-source transparency.</h3>
						<p class="text-[#8B888C] font-medium">
							BeatForge won’t lock you in to our platform. Distribute where you want, when you want,
							and leave any time. Development is public, and always will be.
						</p>
					</div>
					<div
						class="beatforge-landing-bentobox-item text-left bg-[#ffffff11] w-full basis-1/2 p-4 sm:p-16 rounded-md"
					>
						<h3 class="mb-1 font-bold text-white">Crafted to perfection.</h3>
						<p class="text-[#8B888C] font-medium">
							Built with the bleeding edge of technology, BeatForge is a polished product built with
							unforgiving precision.
						</p>
					</div>
				</div>

				<div class="flex flex-col sm:flex-row gap-2 beatforge-landing-bentobox-row-second">
					<div
						class="beatforge-landing-bentobox-item text-left bg-[#ffffff11] w-full p-4 sm:p-16 rounded-md relative"
					>
						<img src="/images/app.png" class="absolute top-0 right-0" alt="application" />
						<div class="max-w-[330px] mt-[196px]">
							<h3 class="mb-1 font-bold text-white">Minimally designed with tasteful touches.</h3>
							<p class="text-[#8B888C] font-medium">
								We stay out of your way. Mod in less time, and play in no time.
							</p>
						</div>
						<div class="absolute inset-0 w-full h-full pointer-events-none">
							<img
								class="pointer-events-none select-none z-[-1] w-full h-full object-cover rounded-md"
								src="/images/blurglow.png"
								alt="app"
							/>
						</div>
					</div>
				</div>

				<div class="flex flex-col sm:flex-row gap-2 beatforge-landing-bentobox-row-third">
					<div
						class="beatforge-landing-bentobox-item text-left bg-[#ffffff11] w-full basis-1/2 p-4 sm:p-16 rounded-md"
					>
						<h3 class="mb-1 font-bold text-white">Safe and secure.</h3>
						<p class="text-[#8B888C] font-medium">
							Manual human review and additional protections and verifications at the code level
							ensures that every mod featured is safe for your use.
						</p>
					</div>
					<div
						class="beatforge-landing-bentobox-item text-left bg-[#ffffff11] w-full basis-1/2 p-4 sm:p-16 rounded-md"
					>
						<h3 class="mb-1 font-bold text-white">Made for the future.</h3>
						<p class="text-[#8B888C] font-medium">
							Stagnation kills modding communities. We’re in it for the long run. We’re building a
							solid foundation and a team that believes in open platforms.
						</p>
					</div>
				</div>
			</div>
		</IntersectionObserver>
	</FeatureSection>
</div>
