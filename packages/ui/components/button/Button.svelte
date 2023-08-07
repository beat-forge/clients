<script>
  // Variants: primary, secondary, download
  export let variant;
  // Disabled: boolean
  export let disabled;

  export let customClasses;

  const variantClasses = {
    primary: 'bg-primary-50 hover:bg-primary-100 text-black-950',
    secondary: 'bg-primary-800 hover:bg-primary-900 text-white',
    download:
      'hover:-translate-y-[2px] bg-gradient-to-r from-[#47334f] to-[#2d2c4f] text-white duration-[200ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]',
  };

  let buttonClasses = `disabled:opacity-50 flex flex-row items-center justify-center transition-all duration-[80ms] px-4 py-2 rounded-full gap-2 font-bold text-sm ${variantClasses[variant]} ${customClasses}`;
</script>

<button {disabled} class={buttonClasses}>
  <slot name="leading" />
  <slot name="content" />
  <slot name="trailing" />
</button>
