import type { Writable } from 'svelte/store';
import { persisted } from 'svelte-local-storage-store';
import type { Instance } from './types';

export const currentInstance: Writable<Instance | null> = persisted('currentInstance', null);
export const selectedItems: Writable<string[]> = persisted('selectedItems', []);
