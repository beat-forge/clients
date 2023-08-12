<script lang="ts">
	import jwt_decode from 'jwt-decode';
	import { user } from '$lib/stores/user';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		page.subscribe((value) => {
			user.set(jwt_decode(value.data.jwt));
			goto('/');
		});
	});
</script>
