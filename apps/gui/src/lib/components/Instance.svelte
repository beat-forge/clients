<script lang="ts">
	import { goto, invalidate, invalidateAll } from '$app/navigation';
	import { page } from '$app/stores';
	import { currentInstance } from '$lib/stores';
	import { redirect } from '@sveltejs/kit';

	export let name: string;
	export let id: string;
	export let version: string;

	let currentId: number | null;

	currentInstance.subscribe((val) => {
		currentId = val;
	});

	$: activeUrl = $page.url.pathname;
	$: activeUrlParams = $page.url.searchParams;
</script>

<div data-id={id} data-name={name} data-version={version} class="-ml-2 flex w-[calc(100%+16px)] flex-col">
	<div
		role="link"
		tabindex="0"
		on:keydown={(e) => {
			if (e.key === 'Enter') {
				currentInstance.set(parseInt(id));
				goto("/instance")
			}
		}}
		on:click={() => {
			currentInstance.set(parseInt(id));
			goto("/instance")
		}}
		class="flex flex-row items-center justify-between rounded-md px-3 py-2 transition-all duration-[120ms] hover:bg-[#ffffff22]"
		style={currentId === parseInt(id)
			? 'background: rgba(255, 255, 255, 23%); box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.25);'
			: ''}
	>
		<!-- name of instance (user customizable) -->
		<p>{name}</p>
		<div class="text-xs font-semibold opacity-75">{version}</div>
	</div>
	<!-- <div>{activeUrlParams.get('ref')}</div>
	<div>{encodeURI(name)}</div>
	<div>{activeUrlParams.get('ref') === encodeURI(name)}</div> -->
</div>
