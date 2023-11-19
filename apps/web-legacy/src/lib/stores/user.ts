import { persisted } from 'svelte-local-storage-store';
export const user = persisted('user', null);
