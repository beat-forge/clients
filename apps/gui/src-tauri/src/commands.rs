use std::io::Error;

use crate::{structs, utils, DATABASE};
use directories::{BaseDirs, UserDirs};
use entity::prelude::*;
use sea_orm::{ColumnTrait, EntityTrait, QueryFilter, Set, ActiveModelTrait, ModelTrait};
use serde::{Deserialize, Serialize};

static STEAM_PATH: &str = r"C:\Program Files (x86)\Steam\steamapps\common\Beat Saber";
static OCULUS_PATH: &str =
    r"C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber";

#[tauri::command]
pub async fn get_instances() -> Vec<structs::Instance> {
    let db =  DATABASE.get().await.clone();

    Instances::find().all(&db).await.unwrap().into_iter().map(|f| {
        structs::Instance {
            name: f.name,
            path: f.path,
            version: f.version,
            is_modded: f.is_modded,
            is_running: false,
        }
    }).collect()
}

#[tauri::command]
pub async fn detect_instances(save: bool) -> Vec<structs::Instance> {
    // detect instances from steam and oculus
    let steam_path_exists = std::path::Path::new(STEAM_PATH).exists();
    let oculus_path_exists = std::path::Path::new(OCULUS_PATH).exists();

    let mut instances: Vec<structs::Instance> = Vec::new();

    if steam_path_exists {
        let steam_instance = structs::Instance {
            name: "Steam".to_string(),
            path: STEAM_PATH.to_string(),
            version: utils::get_game_version(STEAM_PATH.to_string()),
            is_modded: false,
            is_running: false,
        };

        instances.push(steam_instance);
    }

    if oculus_path_exists {
        let oculus_instance = structs::Instance {
            name: "Oculus".to_string(),
            path: OCULUS_PATH.to_string(),
            version: utils::get_game_version(OCULUS_PATH.to_string()),
            is_modded: false,
            is_running: false,
        };

        instances.push(oculus_instance);
    }

    let user_dirs = UserDirs::new().unwrap();
    let documents_dir = user_dirs.document_dir().unwrap();

    let base_dirs = BaseDirs::new().unwrap();
    let data_dir = base_dirs.data_dir();

    let bsm_config_path = data_dir.join("bs-manager").join("config.json");
    if bsm_config_path.exists() {
        let bsm_config_file = std::fs::File::open(bsm_config_path).unwrap();
        let bsm_config: serde_json::Value = serde_json::from_reader(bsm_config_file).unwrap();

        if bsm_config["installation_folder"].as_str().is_none() {
            let bs_manager = documents_dir.join("BSManager").join("BSInstances");

            for entry in std::fs::read_dir(bs_manager).unwrap() {
                let entry = entry.unwrap();
                let path = entry.path();

                if path.is_dir() {
                    instances.push(structs::Instance {
                        name: path.file_name().unwrap().to_str().unwrap().to_string(),
                        path: path.to_str().unwrap().to_string(),
                        version: utils::get_game_version(path.to_str().unwrap().to_string()),
                        is_modded: false,
                        is_running: false,
                    });
                }
            }
        }
    }

    if save {
        let db = DATABASE.get().await.clone();

        let fut = instances.iter().map(|f| async {
            let am = entity::instances::ActiveModel {
                name: Set(f.name.clone()),
                path: Set(f.path.clone()),
                version: Set(f.version.clone()),
                is_modded: Set(f.is_modded),
                ..Default::default()
            };

            if Instances::find().filter(entity::instances::Column::Name.eq(&f.name)).one(&db).await.unwrap().is_none() {
                Instances::insert(am).exec(&db).await.unwrap();
            }
        });

        futures::future::join_all(fut).await;
    }

    instances
}

#[tauri::command]
pub async fn add_instance(name: String) -> Result<structs::Instance, Box<dyn std::error::Error>> {
    // file selection is done natively so no path is passed in
    // rfd cannot be used as tauri depends on a diffrent linked version of gtk3 than rfd, and we cant link both versions.
    let uder = UserDirs::new().unwrap();
    let path = native_dialog::FileDialog::new().set_location(uder.home_dir()).show_open_single_dir()?.ok_or_else(|| Error::new(std::io::ErrorKind::NotFound, "Directory Not found"))?;
    let db = DATABASE.get().await.clone();
    entity::instances::ActiveModel { 
        name: Set(name.clone()),
        path: Set(path.to_str().unwrap().to_string()),
        version: Set(utils::get_game_version(path.to_str().unwrap().to_string())),
        is_modded: Set(false),
        ..Default::default()
    }.insert(&db).await?;
    
    Ok(structs::Instance {
        name,
        path: path.to_str().unwrap().to_string(),
        version: utils::get_game_version(path.to_str().unwrap().to_string()),
        is_modded: false,
        is_running: false,
    })
}

#[tauri::command]
pub async fn remove_instance(name: String) -> Result<bool, Box<dyn std::error::Error>> {
    let db = DATABASE.get().await.clone();
    if let Some(i) = Instances::find().filter(entity::instances::Column::Name.eq(name)).one(&db).await? {
        i.delete(&db).await?;
        return Ok(true);
    }
    Ok(false)
}