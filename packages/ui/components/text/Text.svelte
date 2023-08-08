<script>
  // @ts-nocheck
  // Variants, h1 - h6, subtitle, eyebrow, body
  export let variant;
  export let customClasses;

  const variantClasses = {
    headline: 'text-[max(32px,min(5vw,56px))] font-black text-fore-base',
    h1: 'text-5xl font-black text-fore-base',
    h2: 'text-4xl font-black text-fore-base',
    h3: 'text-3xl font-extrabold text-fore-base',
    h4: 'text-2xl font-bold text-fore-base',
    h5: 'text-xl font-bold text-fore-base',
    h6: 'text-lg font-bold text-fore-base',
    subtitle: 'text-lg font-bold text-fore-muted',
    eyebrow: 'uppercase text-xs font-black text-fore-muted tracking-wider',
    body: 'font-medium text-fore-muted',
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
