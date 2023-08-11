<script lang="ts">
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { isAuthenticated, user, jwtKey } from '$lib/stores/user';
    import jwt_decode from 'jwt-decode';

    onMount(() => {
        document.cookie = `auth=${$jwtKey}; path=/; expires=${new Date(Date.now() + 1000 * 60 * 60 * 24).toUTCString()}`;
        $isAuthenticated = true;
        $user = jwt_decode($jwtKey);
        goto('/')
    })
</script>


<div class="h-screen">

</div>