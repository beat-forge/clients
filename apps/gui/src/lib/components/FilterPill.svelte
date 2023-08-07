<script lang="ts">
    export let icon: string;
	export let option: string;
</script>

<div class="flex flex-row items-center gap-2 rounded-xl pr-1 pl-2 py-1 bg-[#ffffff11] overflow-hidden w-fit">
	<!-- -->
	<div>
        <img src="/icons/{icon}.svg" class="w-4 h-4" alt="icon" />
    </div>
	<!-- pill label -->
	<div class="text-sm text-white bg-[#ffffff22] px-3 py-1 rounded-lg">{option}</div>
</div>
