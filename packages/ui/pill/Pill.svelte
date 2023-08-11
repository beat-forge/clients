<script lang="ts">
  // @ts-nocheck
  import Text from '../text/Text.svelte';

  export let label;
  export let customClasses = '';
</script>

<div
  class="rounded-full bg-primary-700 w-fit px-2 p-1 text-fore-base flex items-center gap-2 whitespace-nowrap"
>
  {#if $$slots.icon}
    <slot name="icon" />
  {/if}

  <slot />
  <Text variant="ghost" customClasses={`text-xs font-bold text-fore-base ${customClasses ?? ''}`}>{label}</Text>
</div>
