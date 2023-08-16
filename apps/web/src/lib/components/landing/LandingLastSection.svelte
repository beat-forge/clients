<script>
	import { DownloadIcon } from 'ui/icons';
	import { Link } from 'ui/link'

	import GradientCtaButton from '$lib/components/landing/GradientCTAButton.svelte';
</script>

<div
	class="relative beatforge-landing-cta-wrapper overflow-hidden"
	style="background: radial-gradient(140% 107.13% at 50% 10%, transparent 37.41%, rgb(0, 0, 0) 69.27%, rgb(0, 0, 0) 100%);"
>
    <!-- <div class="absolute beatforge-landing-video-container pointer-events-none top-1/2 -translate-y-48 beatforge-landing-end-video-container" aria-hidden="true">
        <div class="hidden select-none beatforge-landing-end-video-wrapper z-[2] rounded-3xl sm:block">
            <video style="mask-image: url('/images/logowhite.png'); mask-size: 256px; mask-repeat: no-repeat; mask-position: 50% 35%;" id="player" autoplay muted loop class="object-cover w-screen h-screen beatforge-end-video-source">
                <source src="/video/blackhole.webm" type="video/webm"/>
            </video>
        </div>
    </div> -->
    <!-- <div class="landing-last-blur absolute top-[65%] bg-white h-32 w-32 left-1/2 -translate-x-1/2 blur-[300px] mix-blend-overlay"></div> -->
	<div
		class="relative beatforge-landing-cta h-screen flex flex-col items-center justify-center w-full gap-12 px-4 mx-auto text-center sm:px-8 pt-64 pb-12 max-w-7xl min-h-[727px]"
	>
		<h1
			class="beatforge-landing-header-responsive max-w-[700px] text-5xl font-black leading-[1.25] tracking-wide"
		>
			Join us in shaping the future of Beat Saber modding.
		</h1>

		<div class="flex flex-col gap-4">
			<GradientCtaButton />
		</div>
	</div>
</div>
