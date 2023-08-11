<script lang="ts">
	import { Link } from 'ui/link';
	import { Button } from 'ui/button';
	import { env } from '$env/dynamic/public';
	import { isAuthenticated, user } from '$lib/stores/user';
	import { onMount } from 'svelte';
	import jwt_decode from 'jwt-decode';

	onMount(() => {
		const cookie = document.cookie.split(';').find((cookie) => cookie.startsWith('auth='))?.split('=')[1]
		if (cookie) {
			$isAuthenticated = true
			$user = jwt_decode(cookie)
		}
	})
</script>

<div class="beatforge-page-navbar flex w-full items-center py-8 px-4 mx-auto max-w-7xl z-[100] text-sm font-bold">
	<Link variant="ghost" focusRing={false} href="/">
		<img src="/images/logo.svg" draggable="false" alt="logo" class="h-12 p-3" />
	</Link>

	<div class="ml-auto mr-4 flex flex-row gap-8 items-center">
		<Link variant="text" href="/discover">
			Discover Mods
		</Link>
		{#if $isAuthenticated}
			<Link variant="secondary" href="/dashboard">
				{$user.user.username}
				<img alt="user icon" src={$user.user.avatar} draggable="false" class="w-10 h-10 rounded-full">
			</Link>
		{:else}
			<Link variant="text" href="https://discord.gg/HTVrjFENaZ" external>
				Discord
			</Link>
			<Link variant="secondary" href={env.PUBLIC_GITHUB_CALL_URL}>
				Login
			</Link>
		{/if}
	</div>
</div>
