<script>
  import { Button, LogoIcon } from 'ui';

  function handleClick() {
    console.log('clicked');
  }
</script>

<div class="flex gap-2">
  <Button on:click={handleClick} {...$$props}>
    <div class="contents" slot="content">This is a button</div>
  </Button>
  <Button on:click={handleClick} {...$$props}>
    <div class="contents" slot="leading">
      <LogoIcon className="w-5 h-5" />
    </div>
    <div class="contents" slot="content">This is a logo button</div>
  </Button>
  <Button on:click={handleClick} {...$$props}>
    <div class="contents" slot="content">This is a version button</div>
    <div class="contents" slot="trailing">
      <span class="rounded-3xl -mr-2 px-2 py-1 bg-[#ffffff44]"> v1.0.0 </span>
    </div>
  </Button>
</div>
