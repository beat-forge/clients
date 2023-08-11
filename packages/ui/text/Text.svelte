<script lang="ts">
  // @ts-nocheck
  // Variants, h1 - h6, subtitle, eyebrow, body
  export let variant;
  export let customClasses = '';

  const variantClasses = {
    ghost: '',
    headline: 'text-[max(32px,min(5vw,56px))] font-black',
    h1: 'text-5xl font-black',
    h2: 'text-4xl font-black',
    h3: 'text-3xl font-extrabold',
    h4: 'text-2xl font-bold',
    h5: 'text-xl font-bold',
    h6: 'text-lg font-bold',
    subtitle: 'text-lg font-bold',
    eyebrow: 'uppercase text-xs font-black tracking-wider',
    body: 'font-medium',
  };

  let textClasses = `font-sans ${variantClasses[variant]} ${customClasses ?? ''}`;
</script>

{#if variant === 'h1'}
  <h1 class={textClasses}>
    <slot />
  </h1>
{:else if variant === 'h2'}
  <h2 class={textClasses}>
    <slot />
  </h2>
{:else if variant === 'h3'}
  <h3 class={textClasses}>
    <slot />
  </h3>
{:else if variant === 'h4'}
  <h4 class={textClasses}>
    <slot />
  </h4>
{:else if variant === 'h5'}
  <h5 class={textClasses}>
    <slot />
  </h5>
{:else if variant === 'h6'}
  <h6 class={textClasses}>
    <slot />
  </h6>
{:else if variant === 'subtitle'}
  <h6 class={textClasses}>
    <slot />
  </h6>
{:else if variant === 'eyebrow'}
  <h6 class={textClasses}>
    <slot />
  </h6>
{:else if variant === 'body'}
  <p class={textClasses}>
    <slot />
  </p>
{:else if variant === 'headline'}
  <h1 class={textClasses}>
    <slot />
  </h1>
{:else}
  <p class={textClasses}>
    <slot />
  </p>
{/if}
