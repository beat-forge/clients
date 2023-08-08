<script>
  import { Button, LogoIcon } from 'ui';

  function handleClick() {
    console.log('clicked');
  }
</script>

<div class="flex gap-2">
  <Button on:click={handleClick} {...$$props}>This is a button</Button>
  <Button on:click={handleClick} {...$$props}>
    <LogoIcon slot="leading" className="w-5 h-5" />
    This is a logo button
  </Button>
  <Button on:click={handleClick} {...$$props}>
    This is a version button
    <span slot="trailing" class="rounded-3xl -mr-2 px-2 py-1 bg-[#ffffff44]"> v1.0.0 </span>
  </Button>
</div>
