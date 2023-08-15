<script lang="ts">
  // @ts-nocheck
  // Variants: underlined, text, primarybutton, secondarybutton
  export let variant = 'unset';
  export let customClasses = '';
  // Boolean
  export let external = false;
  export let focusRing = true;
  export let href = '';

  const variantClasses = {
    unset: '',
    ghost: 'outline-none',
    underlined: 'underline',
    text: 'hover:underline focus-visible:underline',
    primary: 'flex flex-row items-center justify-center transition-all duration-[80ms] rounded-full gap-2 font-bold text-sm px-4 py-2 bg-primary-50 hover:bg-primary-200 text-primary-950',
    secondary: 'flex flex-row items-center justify-center transition-all duration-[80ms] rounded-full gap-2 font-bold text-sm px-4 py-2 bg-primary-800 hover:bg-primary-700 text-white'
  };

  let linkClasses = `${focusRing ? 'outline-none focus:shadow-none focus-visible:ring-4 focus-visible:ring-[#00a8fc]' : ''}  ${variantClasses[variant]} ${customClasses}`
</script>

<a tabindex="0" href={href ?? ''} class={linkClasses} target={`${external ? '_blank' : ''}`} rel={`${external ? 'noopener noreferrer' : ''}`}>
  <slot />
</a>