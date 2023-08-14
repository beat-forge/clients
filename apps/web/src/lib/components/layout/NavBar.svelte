<script lang="ts">
	import { get } from 'svelte/store';
	// import { env } from '$env/dynamic/public';
	import { Link } from 'ui/link';
	import { Button } from 'ui/button';
	import { Dropdown } from 'ui/dropdown';
	import { BarsThree } from 'ui/icons';
	import { user } from '$lib/stores/user';
</script>

<div
	class="beatforge-page-navbar relative flex w-full items-center py-4 px-4 mx-auto max-w-7xl z-[100] text-sm font-bold justify-between"
>
	<div class="flex md:hidden w-16">
		<Dropdown>
			<BarsThree slot="trigger" customClasses="h-5 w-5" />
		</Dropdown>
	</div>

	<Link customClasses="flex-shrink-0" variant="ghost" focusRing={false} href="/">
		<img src="/images/logo.svg" draggable="false" alt="logo" class="flex h-12 p-3" />
	</Link>

	<div
		style="background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.08);"
		class="hidden md:flex md:gap-8 py-3 px-5 rounded-full"
	>
		<div data-umami-event="Generic - Navbar Discover Link">
			<Link variant="text" href="/discover">Discover Mods</Link>
		</div>
		<div data-umami-event="Generic - Navbar Client Link">
			<Link variant="text" href="/client">Client</Link>
		</div>

		<div data-umami-event="Generic - Navbar Discord Link">
			<Link variant="text" href="https://discord.gg/HTVrjFENaZ" external>Discord</Link>
		</div>
	</div>

	<div class="flex flex-row items-center gap-8">
		{#if $user}
			<div
				data-umami-event-profile-id={`${$user.user?.id}`}
				data-umami-event="Generic - Profile Link"
			>
				<Link variant="secondary" href={`/profile/${$user.user?.id}`}>
					<div class="hidden md:flex">
						{$user?.user.username}
					</div>
					<img
						alt="user icon"
						src={$user?.user.avatar}
						draggable="false"
						class="flex flex-shrink-0 w-8 h-8 min-w-[32px] min-h-[32px] rounded-full"
					/>
				</Link>
			</div>
		{:else}
			<!-- <Link variant="secondary" href={apiURL}>
				Login
			</Link> -->
			<a
				data-umami-event="Generic - Navbar Login Link"
				href={import.meta.env.GITHUB_CALLBACK_URL}
				class="flex items-center gap-2"
			>
				Login
			</a>
		{/if}
	</div>
</div>
