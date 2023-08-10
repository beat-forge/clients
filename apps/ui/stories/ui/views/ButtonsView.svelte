<script>
  import { Button } from 'ui/button';
  import { LogoIcon, CopyIcon } from 'ui/icons'

  function handleClick() {
    console.log('clicked');
  }
</script>

<div class="flex gap-2 rounded-md bg-black p-8">
  <Button on:click={handleClick} {...$$props}>This is a button</Button>

  <Button on:click={handleClick} {...$$props}>
    <LogoIcon slot="leading" className="w-5 h-5" />
    This is a logo button
  </Button>

  <Button on:click={handleClick} {...$$props}>
    This is a version button
    <span slot="trailing" class="rounded-3xl -mr-2 px-2 py-1 bg-[#ffffff44]"> v1.0.0 </span>
  </Button>

  <Button on:click={handleClick} {...$$props}>
    <CopyIcon slot="leading" className="w-5 h-5" />
    Icon Button
  </Button>
</div>
