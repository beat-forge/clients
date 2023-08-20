use std::{io::Error, path::Path, convert::Infallible, any};

use crate::{structs, utils, DATABASE};
use directories::{BaseDirs, UserDirs};
use entity::prelude::*;
use forge_lib::structs::v1::{unpack_v1_forgemod, ForgeModTypes};
use minreq::post;
use sea_orm::{ActiveModelTrait, ColumnTrait, EntityTrait, ModelTrait, QueryFilter, Set};
use serde::{Deserialize, Serialize};

static STEAM_PATH: &str = r"C:\Program Files (x86)\Steam\steamapps\common\Beat Saber";
static OCULUS_PATH: &str =
    r"C:\Program Files\Oculus\Software\Software\hyperbolic-magnetism-beat-saber";

#[tauri::command]
pub async fn get_instances() -> Vec<structs::Instance> {
    let db = DATABASE.get().await.clone();

    Instances::find()
        .all(&db)
        .await
        .unwrap()
        .into_iter()
        .map(|f| structs::Instance {
            id: f.id,
            name: f.name,
            path: f.path,
            version: f.version,
            is_modded: f.is_modded,
            timestamp: f.timestamp,
            mods: None, // mods not returned here
        })
        .collect()
}

#[tauri::command]
pub async fn get_instance(id: i32) -> structs::Instance {
    dbg!("invoked");
    let db = DATABASE.get().await.clone();

    let mods = InstanceMods::find()
        .filter(entity::instance_mods::Column::InstanceId.eq(id))
        .all(&db)
        .await
        .unwrap();

    let instance = Instances::find_by_id(id)
        .one(&db)
        .await
        .unwrap()
        .unwrap();

    structs::Instance {
        id: instance.id,
        name: instance.name,
        path: instance.path,
        version: instance.version,
        is_modded: instance.is_modded,
        timestamp: instance.timestamp,
        mods: Some(
            mods.into_iter()
                .map(|f| structs::Mod {
                    mod_id: f.mod_id,
                    timestamp: f.timestamp,
                })
                .collect(),
        ),
    }
}

#[tauri::command]
pub async fn detect_instances() -> Vec<structs::Instance> {
    // detect instances from steam and oculus
    let steam_path_exists = std::path::Path::new(STEAM_PATH).exists();
    let oculus_path_exists = std::path::Path::new(OCULUS_PATH).exists();
    let mut instances: Vec<structs::Instance> = Vec::new();
    let db = DATABASE.get().await.clone();

    if steam_path_exists {
        let db_instance = Instances::find()
            .filter(entity::instances::Column::Path.eq(STEAM_PATH))
            .one(&db)
            .await
            .unwrap();

        if let Some(instance) = db_instance {
            instances.push(structs::Instance {
                id: instance.id,
                name: instance.name,
                path: instance.path,
                version: instance.version,
                is_modded: instance.is_modded,
                timestamp: instance.timestamp,
                mods: None,
            });
        } else {
            let db_instance = entity::instances::ActiveModel {
                name: Set("Steam".to_string()),
                path: Set(STEAM_PATH.to_string()),
                version: Set(utils::get_game_version(STEAM_PATH.to_string())),
                is_modded: Set(false),
                ..Default::default()
            };

            let instance = db_instance.insert(&db).await.unwrap();

            instances.push(structs::Instance {
                id: instance.id,
                name: instance.name,
                path: instance.path,
                version: instance.version,
                is_modded: instance.is_modded,
                timestamp: instance.timestamp,
                mods: None,
            });
        }
    }

    if oculus_path_exists {
        let db_instance = Instances::find()
            .filter(entity::instances::Column::Path.eq(OCULUS_PATH))
            .one(&db)
            .await
            .unwrap();

        if let Some(instance) = db_instance {
            instances.push(structs::Instance {
                id: instance.id,
                name: instance.name,
                path: instance.path,
                version: instance.version,
                is_modded: instance.is_modded,
                timestamp: instance.timestamp,
                mods: None,
            });
        } else {
            let db_instance = entity::instances::ActiveModel {
                name: Set("Oculus".to_string()),
                path: Set(OCULUS_PATH.to_string()),
                version: Set(utils::get_game_version(OCULUS_PATH.to_string())),
                is_modded: Set(false),
                ..Default::default()
            };

            let instance = db_instance.insert(&db).await.unwrap();

            instances.push(structs::Instance {
                id: instance.id,
                name: instance.name,
                path: instance.path,
                version: instance.version,
                is_modded: instance.is_modded,
                timestamp: instance.timestamp,
                mods: None,
            });
        }
    }

    let user_dirs = UserDirs::new().unwrap();
    let documents_dir = user_dirs.document_dir().unwrap();

    let base_dirs = BaseDirs::new().unwrap();
    let data_dir = base_dirs.data_dir();

    let bsm_config_path = data_dir.join("bs-manager").join("config.json");
    if bsm_config_path.exists() {
        let bsm_config_file = std::fs::File::open(bsm_config_path).unwrap();
        let bsm_config: serde_json::Value = serde_json::from_reader(bsm_config_file).unwrap();

        if bsm_config["installation-folder"].as_str().is_none() {
            let bs_manager = documents_dir.join("BSManager").join("BSInstances");

            for entry in std::fs::read_dir(bs_manager).unwrap() {
                let entry = entry.unwrap();
                let path = entry.path();

                if path.is_dir() {
                    let db_instance = Instances::find()
                        .filter(entity::instances::Column::Path.eq(path.to_str().unwrap()))
                        .one(&db)
                        .await
                        .unwrap();

                    if let Some(instance) = db_instance {
                        instances.push(structs::Instance {
                            id: instance.id,
                            name: instance.name,
                            path: instance.path,
                            version: instance.version,
                            is_modded: instance.is_modded,
                            timestamp: instance.timestamp,
                            mods: None,
                        });
                    } else {
                        let db_instance = entity::instances::ActiveModel {
                            name: Set(path.file_name().unwrap().to_str().unwrap().to_string()),
                            path: Set(path.to_str().unwrap().to_string()),
                            version: Set(utils::get_game_version(path.to_str().unwrap().to_string())),
                            is_modded: Set(false),
                            ..Default::default()
                        };

                        let instance = db_instance.insert(&db).await.unwrap();

                        instances.push(structs::Instance {
                            id: instance.id,
                            name: instance.name,
                            path: instance.path,
                            version: instance.version,
                            is_modded: instance.is_modded,
                            timestamp: instance.timestamp,
                            mods: None,
                        });
                    }
                }
            }
        } else {
            let base_path = bsm_config["installation-folder"].as_str().unwrap(); // this is the base path for bs manager, not including BSManager
            let mut bs_manager = Path::new(base_path).join("BSManager");
            bs_manager.push("BSInstances");
			dbg!(&bs_manager);

            for entry in std::fs::read_dir(bs_manager).unwrap() {
                let entry = entry.unwrap();
                let path = entry.path();

                if path.is_dir() {
                    let db_instance = Instances::find()
                        .filter(entity::instances::Column::Path.eq(path.to_str().unwrap()))
                        .one(&db)
                        .await
                        .unwrap();

                    if let Some(instance) = db_instance {
                        instances.push(structs::Instance {
                            id: instance.id,
                            name: instance.name,
                            path: instance.path,
                            version: instance.version,
                            is_modded: instance.is_modded,
                            timestamp: instance.timestamp,
                            mods: None,
                        });
                    } else {
                        let db_instance = entity::instances::ActiveModel {
                            name: Set(path.file_name().unwrap().to_str().unwrap().to_string()),
                            path: Set(path.to_str().unwrap().to_string()),
                            version: Set(utils::get_game_version(path.to_str().unwrap().to_string())),
                            is_modded: Set(false),
                            ..Default::default()
                        };

                        let instance = db_instance.insert(&db).await.unwrap();

                        instances.push(structs::Instance {
                            id: instance.id,
                            name: instance.name,
                            path: instance.path,
                            version: instance.version,
                            is_modded: instance.is_modded,
                            timestamp: instance.timestamp,
                            mods: None,
                        });
                    }
                }
            }
        }
    }

    instances
}

#[tauri::command]
pub async fn add_instance(name: String) -> structs::Instance {
    // file selection is done natively so no path is passed in
    // rfd cannot be used as tauri depends on a different linked version of gtk3 than rfd, and we cant link both versions.
    let uder = UserDirs::new().unwrap();
    let path = native_dialog::FileDialog::new()
        .set_location(uder.home_dir())
        .show_open_single_dir().unwrap()
        .ok_or_else(|| Error::new(std::io::ErrorKind::NotFound, "Directory Not found")).unwrap();
    let db = DATABASE.get().await.clone();
    let instance = entity::instances::ActiveModel {
        name: Set(name.clone()),
        path: Set(path.to_str().unwrap().to_string()),
        version: Set(utils::get_game_version(path.to_str().unwrap().to_string())),
        is_modded: Set(false),
        ..Default::default()
    }
    .insert(&db)
    .await.unwrap();

    structs::Instance {
        id: instance.id,
        name: instance.name,
        path: instance.path,
        version: instance.version,
        is_modded: instance.is_modded,
        timestamp: instance.timestamp,
        mods: None,
    }
}

#[tauri::command]
pub async fn remove_instance(name: String) -> bool {
    let db = DATABASE.get().await.clone();
    if let Some(i) = Instances::find()
        .filter(entity::instances::Column::Name.eq(name))
        .one(&db)
        .await.unwrap()
    {
        i.delete(&db).await.unwrap();
        return true;
    }
    false
}

#[tauri::command]
pub async fn install_mod(
    instance_id: i32,
    mod_id: String,
    // mod_version: Option<String>,
    // api_url: Option<String>,
) -> () {
    // let db = DATABASE.get().await.clone();
    // let instance = Instances::find_by_id(instance_id).one(&db).await?.unwrap();

    // let fm_res = post(format!("{}/graphql", api_url))
    //     .with_body(format!(
    //         "{{
    //         mods {{
    //             mod(id: \"{}\") {{
    //                 versions {{
    //                     downloadUrl
    //                 }}
    //             }}
    //         }}
    //     }}",
    //         mod_id
    //     ))
    //     .send()?
    //     .json::<serde_json::Value>()?
    //     .as_object()
    //     .unwrap()
    //     .get("data")
    //     .unwrap()
    //     .as_array()
    //     .unwrap();

    // let mut fm_bin = Vec::new();
    // let forgemod = unpack_v1_forgemod(fm_bin.as_slice())
    //     .map_err(|e| anyhow::anyhow!("Failed to unpack forge mod: {}", e))?;

    // match forgemod {
    //     ForgeModTypes::Mod(m) => {
    //         let artifact_data = m.data.artifact_data;
    //         let artifact_name = m.manifest.inner.artifact.unwrap();
    //         let artifact_name = artifact_name.file_name().unwrap().to_str().unwrap();
    //         let includes = m.data.includes_data;

    //         for i in &includes {
    //             if (i.dest.starts_with("..") || i.dest.starts_with("/"))
    //                 && !i.dest.starts_with("../")
    //             {
    //                 return Err(anyhow::anyhow!("Invalid include path: {}", i.dest));
    //             }
    //         }

    //         std::fs::write(
    //             format!("{}\\Plugins\\{}", instance.path, artifact_name),
    //             artifact_data,
    //         )?;

    //         includes.iter().for_each(|i| {
    //             std::fs::write(format!("{}\\{}", instance.path, i.dest), &*i.data).unwrap();
    //         })
    //     }
    //     _ => {
    //         return Err(anyhow::anyhow!(
    //             "TODO: other types of mods are not supported yet."
    //         ));
    //     }
    // }

    dbg!("nop - mod install not implemented yet");
    let instance = Instances::find_by_id(instance_id).one(&DATABASE.get().await.clone()).await.unwrap().unwrap();
    let im = entity::instance_mods::ActiveModel {
        instance_id: Set(instance_id),
        mod_id: Set(mod_id),
        ..Default::default()
    }.insert(&DATABASE.get().await.clone()).await.unwrap();
}
