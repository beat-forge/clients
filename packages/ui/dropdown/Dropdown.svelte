<script lang="ts">
    import { createDropdownMenu, melt } from '@melt-ui/svelte'
    import { fly } from 'svelte/transition';
    import Link from "../link/Link.svelte"
    const {
      elements: { menu, item, trigger, arrow },
      states: { open }
    } = createDropdownMenu()
  </script>
   
<button use:melt={$trigger}>
    <slot name="trigger"></slot>
</button>
{#if $open}
    <div class="flex flex-col p-2 text-center rounded-lg select-none bg-primary-850 text-primary-50 z-[9999] font-bold" use:melt={$menu} transition:fly={{ duration: 150, y: -10 }}>
        <div use:melt={$item} class="p-2 rounded-md hover:bg-primary-800">
            <Link variant="unset" href="/discover">Discover Mods</Link>
        </div>
        <div use:melt={$item} class="p-2 rounded-md hover:bg-primary-800">
            <Link variant="unset" href="/download">Client</Link>
        </div>
        <div use:melt={$item} class="p-2 rounded-md hover:bg-primary-800">
            <Link variant="unset" href="https://discord.com/invite/HTVrjFENaZ">Discord</Link>
        </div>
    </div>
{/if}