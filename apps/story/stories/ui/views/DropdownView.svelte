<script>
    import { Dropdown } from 'ui/dropdown'
    import { BarsThree } from 'ui/icons';
</script>

<div class="flex justify-center items-center flex-col">
    <p class="text-xs opacity-50 m-5">Small NavBar Menu</p>
    <Dropdown>
        <BarsThree slot="trigger" customClasses="h-5 w-5" />
    </Dropdown>
</div>