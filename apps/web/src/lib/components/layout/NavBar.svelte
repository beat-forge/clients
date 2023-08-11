<script>
	import { Link } from 'ui/link';
	import { Button } from 'ui/button';
	import { env } from '$env/dynamic/public';
	import { isAuthenticated, user } from '$lib/stores/user';

	$: isAuthenticated;
	$: user;
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
			<Link variant="text" href="/dashboard">
				<Button variant="secondary" disabled={false}>
					{user.username}
					<img slot="trailing" alt="user icon" src={user.avatar} draggable="false" class="w-10 h-10 rounded-full">
				</Button>
			</Link>
		{:else}
			<Link variant="text" href="https://discord.gg/HTVrjFENaZ" external>
				Discord
			</Link>
			<Link variant="text" href={env.PUBLIC_GITHUB_CALL_URL}>
				<Button variant="secondary" disabled={false}>
					Login
				</Button>
			</Link>
		{/if}
	</div>
</div>
