<script lang="ts">
    import { createDropdownMenu, melt } from '@melt-ui/svelte'
    import { fly } from 'svelte/transition';
    import Link from "../link/Link.svelte"
    const {
      elements: { menu, item, trigger, arrow },
      states: { open }
    } = createDropdownMenu()
  </script>

<button class="p-4" use:melt={$trigger}>
    <slot name="trigger"></slot>
</button>
{#if $open}
    <div class="flex flex-col p-4 text-center rounded-lg select-none bg-primary-850 text-primary-50 z-[9999] font-bold" use:melt={$menu} transition:fly={{ duration: 150, y: -10 }}>
        <div use:melt={$item} class="rounded-md hover:bg-primary-800">
            <Link customClasses="flex h-full w-full p-2" variant="unset" href="/">Home</Link>
        </div>
        <div use:melt={$item} class="rounded-md hover:bg-primary-800">
            <Link customClasses="flex h-full w-full p-2" variant="unset" href="/discover">Discover Mods</Link>
        </div>
        <div use:melt={$item} class="rounded-md hover:bg-primary-800">
            <Link customClasses="flex h-full w-full p-2" variant="unset" href="/client">Client</Link>
        </div>
        <div use:melt={$item} class="rounded-md hover:bg-primary-800">
            <Link customClasses="flex h-full w-full p-2" variant="unset" href="https://discord.com/invite/HTVrjFENaZ">Discord</Link>
        </div>
    </div>
{/if}