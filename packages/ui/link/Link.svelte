<script lang="ts">
  // @ts-nocheck
  // Variants: underlined, text, primarybutton, secondarybutton
  export let variant;
  export let customClasses;
  export let href;

  const variantClasses = {
    underlined: 'underline',
    text: 'hover:underline',
    primarybutton: 'flex flex-row items-center justify-center transition-all duration-[80ms] rounded-full gap-2 font-bold text-sm px-4 py-2 bg-primary-50 hover:bg-primary-100 text-black-950',
    secondarybutton: 'flex flex-row items-center justify-center transition-all duration-[80ms] rounded-full gap-2 font-bold text-sm px-4 py-2 bg-primary-800 hover:bg-primary-900 text-white'
  };

  let linkClasses = `${variantClasses[variant]} ${customClasses}`
</script>

<a href={href ?? ''}} class={linkClasses}>
  <slot />
</a>