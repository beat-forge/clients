<script lang="ts">
	import { goto } from '$app/navigation';
	import { currentInstance } from '$lib/stores';
	import type { Instance } from '$lib/types';

	export let instance: Instance;
</script>

<div
	data-id={instance?.id}
	data-name={instance?.name}
	data-version={instance?.version}
	class="-ml-2 flex w-[calc(100%+16px)] flex-col"
>
	<div
		role="link"
		tabindex="0"
		on:keydown={(e) => {
			if (e.key === 'Enter') {
				currentInstance.set(instance);
				goto(`/instance`);
			}
		}}
		on:click={() => {
			currentInstance.set(instance);
			goto(`/instance`);
		}}
		class="flex flex-row items-center justify-between rounded-md px-3 py-2 transition-all duration-[120ms] hover:bg-[#ffffff22]"
		style={$currentInstance && instance && parseInt($currentInstance.id) === parseInt(instance.id)
			? 'background: rgba(255, 255, 255, 23%); box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.25);'
			: ''}
	>
		<!-- name of instance (user customizable) -->
		<p>{instance?.name}</p>
		<div class="text-xs font-semibold opacity-75">v{instance?.version}</div>
	</div>
	<!-- <div>{activeUrlParams.get('ref')}</div>
	<div>{encodeURI(name)}</div>
	<div>{activeUrlParams.get('ref') === encodeURI(name)}</div> -->
</div>
