<script>
  import Text from '../text/Text.svelte';

  export let label;
</script>

<div
  class="rounded-3xl bg-primary-700 w-fit px-2 p-1 text-fore-base flex items-center gap-2 whitespace-nowrap"
>
  {#if $$slots.icon}
    <slot name="icon" />
  {/if}

  <slot />
  <Text variant="body" customClasses="text-xs font-bold text-fore-base">{label}</Text>
</div>
