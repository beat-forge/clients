use serde::{Serialize, Deserialize};
use sea_orm::prelude::*;

#[derive(Serialize, Deserialize, Debug)]
pub struct Instance {
    pub id: i32,
    pub name: String,
    pub path: String,
    pub version: String,
    pub is_modded: bool,
    pub mods: Option<Vec<Mod>>,
    pub timestamp: DateTimeUtc,
}


#[derive(Serialize, Deserialize, Debug)]
pub struct Mod {
    pub mod_id: String,
    pub timestamp: DateTimeUtc,
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct InstanceUpdate {
    pub instance_id: i32,
    pub kind: InstanceUpdateKind,
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub enum InstanceUpdateKind {
    /// ModInstalled(<mod_id>)
    ModInstalled(String),
}

impl InstanceUpdate {
    pub fn new(instance_id: i32, kind: InstanceUpdateKind) -> Self {
        Self { instance_id, kind }
    }
}