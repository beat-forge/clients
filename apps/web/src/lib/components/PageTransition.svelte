<script lang="ts">
	import { fly } from 'svelte/transition';

	export let pathname: string = '';
</script>

{#key pathname}
	<div class="beatforge-layout__animation-root w-screen h-fit flex flex-grow relative" in:fly={{ x: -16, duration: 250, delay: 250 }} out:fly={{ x: 8, duration: 250 }}>
		<slot />
	</div>
{/key}