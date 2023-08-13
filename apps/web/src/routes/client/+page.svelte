<!-- todo: implement client download page -->
<script>
	import GradientCtaButton from "$lib/components/landing/GradientCTAButton.svelte";
    import { Text } from "ui/text";
</script>

<div class="w-full h-full flex flex-col items-center px-4">
    <div class="flex flex-col items-center w-full max-w-7xl text-center gap-4">
        <Text variant="h2">
            The BeatForge client isn't ready yet!
        </Text>

        <Text variant="body" customClasses="text-fore-muted max-w-xl">
            But it'll be here soon! Join our growing community of modders and developers on Discord, and stay up-to-date with the latest news.
        </Text>

        <div class="mt-4">
            <GradientCtaButton />
        </div>
    </div>
</div>
