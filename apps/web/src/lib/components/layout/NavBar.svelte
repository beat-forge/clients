<script lang="ts">
	import { Link } from 'ui/link';
	import { Button } from 'ui/button';
	import { Dropdown } from 'ui/dropdown';
	import { BarsThree } from 'ui/icons';

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
	<Link customClasses="flex-shrink-0" variant="ghost" focusRing={false} href="/">
		<img src="/images/logo.svg" draggable="false" alt="logo" class="h-12 p-3 flex" />
	</Link>

	<div class="ml-auto mr-4 flex flex-row gap-8 items-center">
		<div class="flex md:hidden">
			<Dropdown >
				<BarsThree slot="trigger" customClasses="h-5 w-5" />
			</Dropdown>
		</div>

		<div class="hidden md:flex md:gap-8">
			<Link variant="text" href="/discover">
				Discover Mods
			</Link>
			<Link variant="text" href="/">
				Client
			</Link>
			<Link variant="text" href="https://discord.gg/HTVrjFENaZ" external>
				Discord
			</Link>
		</div>

		{#if $isAuthenticated}
			<Link variant="secondary" href={`/profile/${$user.user.id}`}>
				<div class="hidden md:flex">
					{$user.user.username}
				</div>
				<img alt="user icon" src={$user.user.avatar} draggable="false" class="flex flex-shrink-0 w-8 h-8 min-w-[32px] min-h-[32px] md:w-10 md:h-10 rounded-full">
			</Link>
		{:else}
			<!-- <Link variant="secondary" href={apiURL}>
				Login
			</Link> -->
			<a href={env.PUBLIC_GITHUB_CALL_URL} class="flex items-center gap-2">
				Login
			</a>
		{/if}
	</div>


</div>
