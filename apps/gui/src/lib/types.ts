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
