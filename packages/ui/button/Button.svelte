<script lang="ts">
  // @ts-nocheck
  // Variants: primary, secondary, download, ghost
  export let variant = 'unset';
  // Disabled: boolean
  export let disabled = false;

  export let customClasses = '';

  const variantClasses = {
    unset: '',
    primary: 'px-4 py-2 bg-primary-50 hover:bg-primary-200 text-primary-950',
    secondary: 'px-4 py-2 bg-primary-800 hover:bg-primary-900 text-white',
    gradient:
      'will-change-transform px-4 py-2 bg-gradient-to-r from-[#47334f] to-[#2d2c4f] text-white duration-[200ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]',
    ghost: 'bg-transparent fill-white text-white',
    pill: 'text-xs bg-primary-700 w-fit px-2 p-1 text-fore-base whitespace-nowrap',
  };

  let buttonClasses = `
    ${variant === "unset" ? '' : 'select-none outline-none focus:shadow-none focus-visible:ring-4 focus-visible:ring-[#00a8fc] disabled:opacity-50 flex flex-row items-center justify-center transition-all duration-[80ms] rounded-full gap-2 font-bold text-sm'}
    ${variantClasses[variant]}
    ${customClasses}
  `;
</script>

<button {disabled} class={buttonClasses} on:click>
  {#if $$slots.leading}
    <slot name="leading" />
  {/if}
  {#if $$slots.content}
    <slot name="content" />
  {/if}

  <slot />

  {#if $$slots.trailing}
    <slot name="trailing" />
  {/if}
</button>
