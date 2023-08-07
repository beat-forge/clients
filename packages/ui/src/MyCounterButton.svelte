<script lang="ts">
  let count = 0;

  function handleClick() {
    count += 1;
  }
</script>

<button class="m-4 p-2 bg-red-400" on:click="{handleClick}">
  clicks: {count}
</button>
