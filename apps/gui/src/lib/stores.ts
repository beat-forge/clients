import { writable, type Writable } from "svelte/store";
import type { Instance } from "./types";
import type { S } from "@tauri-apps/api/event-41a9edf5";

export const currentInstance: Writable<number| null> = writable(null);
export const selectedItems: Writable<string[]> = writable([]);