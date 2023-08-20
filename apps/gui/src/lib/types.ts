export interface Instance {
    id: string;
    name: string;
    path: string;
    version: string;
    is_modded: boolean;
    timestamp: String;
    mods: Mod[];
}

export interface Mod {
    mod_id: string;
    timestamp: string;
}