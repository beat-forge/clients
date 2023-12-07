<script lang="ts">
	import jwt_decode from 'jwt-decode';
	import { user } from '$lib/stores/user';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	function refresh() {
		location.reload();
	}

	onMount(() => {
		page.subscribe((value) => {
			// TODO!: when the page subscribes to this value, it happens twice, breaking client-side navigation
			// I "fixed" this with a try/catch and reloading the page on login
			// - fero
			try {
				user.set(jwt_decode(value.data.jwt));
			} catch (e) {
				console.error('An error occurred setting the JWT', e)
			}
			goto('/').then(refresh)
		});
	});
</script>
