<script>
  import { Pill } from 'ui';
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
  } from 'ui';
</script>

<div class="bg-black p-8 rounded-md flex flex-col gap-2">
  <Pill label="This is a pill" />
  <Pill label="Updated 4 days ago">
    <CalendarIcon className="w-4 h-4" />
  </Pill>
</div>
