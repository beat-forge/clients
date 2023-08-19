<script lang="ts">
	import { page } from '$app/stores';

	export let name: string;
	export let version: string;

	$: activeUrl = $page.url.pathname;
</script>

<div class="-ml-2 flex w-[calc(100%+16px)] flex-col">
	<a
		href="/instance/{name}"
		class="flex flex-row items-center justify-between rounded-md px-3 py-2 transition-all duration-[120ms] hover:bg-[#ffffff22]"
		style={activeUrl === `/instance/${encodeURI(name)}`
			? 'background: rgba(255, 255, 255, 23%); box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.25);'
			: ''}
	>
		<!-- name of instance (user customizable) -->
		<p>{name}</p>
		<div class="text-xs font-semibold opacity-75">{version}</div>
	</a>
</div>
