use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize, Debug)]
pub struct Instance {
    pub name: String,
    pub path: String,
    pub version: String,
    pub is_modded: bool,
    pub is_running: bool,
}
