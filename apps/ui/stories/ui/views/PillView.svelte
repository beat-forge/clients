<script>
  import { Pill } from 'ui/pill';
  import { CalendarIcon } from 'ui/icons';
</script>

<div class="bg-black p-8 rounded-md flex flex-col gap-2">
  <Pill label="This is a pill" />
  <Pill label="Updated 4 days ago">
    <CalendarIcon customClasses="w-4 h-4" />
  </Pill>
</div>
