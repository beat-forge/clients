import { writable } from "svelte/store";

export const isAuthenticated = writable(false);
export const user = writable(null);