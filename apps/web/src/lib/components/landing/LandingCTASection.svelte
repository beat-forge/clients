<script>
	import { DownloadIcon } from 'ui/icons';
	import { Link } from 'ui/link'

	import GradientCtaButton from '$lib/components/landing/GradientCTAButton.svelte';
</script>

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
			<GradientCtaButton />

			<Link variant="secondary" href="https://github.com/beat-forge/clients" external>
				Source Code
			</Link>
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
