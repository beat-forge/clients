import type { S } from "@tauri-apps/api/event-41a9edf5";

export interface ExistingInstance {
	id: string;
	name: string;
	path: string;
	version: string;
	is_modded: boolean;
	timestamp: string;
	mods: Mod[];
};

export type Instance = ExistingInstance | null;

export interface Mod {
	mod_id: string;
	timestamp: string;
}

export interface SearchMod {
	name: string;
	description: string;
	id: string;
	slug: string;
	versions: SearchVersion[];
	category: string;
	author: SearchAuthor;
	stats: SearchStats;
	supported_versions: string[];
	created_at: string;
	updated_at: string;
	status: ModStatus | undefined;
}

export interface SearchVersion {
	version: string;
}

export interface SearchAuthor {
	username: string;
	display_name: string | null;
}

export interface SearchStats {
	downloads: number;
}

export enum ModStatus {
	Installed,
	NotInstalled,
	Installing
}

export interface InstanceUpdate<T extends InstanceUpdateKind | undefined = undefined> {
	instance_id: number;
	kind: T;
}

export interface InstanceUpdateKind {}

export interface ModInstalled extends InstanceUpdateKind {
	ModInstalled: string;
}