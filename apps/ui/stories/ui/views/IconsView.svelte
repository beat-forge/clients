<script>
  import {
    CalendarIcon,
    CategoryIcon,
    CheckmarkIcon,
    ChevronDownIcon,
    ChevronLeftIcon,
    CopyIcon,
    DotsIcon,
    DownloadIcon,
    ExclamationIcon,
    GithubIcon,
    LogoIcon,
    NotVerifiedIcon,
    PersonIcon,
    SearchIcon,
    VerifiedIcon,
  } from 'ui/icons';

  const iconImports = [
    { name: 'CalendarIcon', component: CalendarIcon },
    { name: 'CategoryIcon', component: CategoryIcon },
    { name: 'CheckmarkIcon', component: CheckmarkIcon },
    { name: 'ChevronDownIcon', component: ChevronDownIcon },
    { name: 'ChevronLeftIcon', component: ChevronLeftIcon },
    { name: 'CopyIcon', component: CopyIcon },
    { name: 'DotsIcon', component: DotsIcon },
    { name: 'DownloadIcon', component: DownloadIcon },
    { name: 'ExclamationIcon', component: ExclamationIcon },
    { name: 'GithubIcon', component: GithubIcon },
    { name: 'LogoIcon', component: LogoIcon },
    { name: 'NotVerifiedIcon', component: NotVerifiedIcon },
    { name: 'SearchIcon', component: SearchIcon },
    { name: 'PersonIcon', component: PersonIcon },
    { name: 'VerifiedIcon', component: VerifiedIcon },
  ];
</script>

<div class="grid md:grid-cols-6 gap-4">
  {#each iconImports as { name, component }}
    <div class="flex flex-col items-center">
      <svelte:component this={component} customClasses="w-8 h-8" />
      <span class="text-sm text-gray-500">{name}</span>
    </div>
  {/each}
</div>
