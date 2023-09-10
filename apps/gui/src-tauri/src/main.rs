// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod commands;
mod structs;
mod utils;

use async_once::AsyncOnce;
use discord_rich_presence::{
    activity::{self, Assets, Button},
    DiscordIpc, DiscordIpcClient,
};
use migration::MigratorTrait;

lazy_static::lazy_static! {
    static ref DATABASE: AsyncOnce<sea_orm::DatabaseConnection> = AsyncOnce::new(async {
        let project = directories::ProjectDirs::from("net", "BeatForge", "gui").unwrap();
        let db_path = project.data_dir().join("db.sqlite");

        let _ = std::fs::create_dir_all(db_path.parent().unwrap());
        if !db_path.exists() {
            std::fs::File::create(&db_path).unwrap();
        }

        if std::env::var("BEATFORGE_CLIENT_DEBUG").is_ok() && std::env::var("BEATFORGE_CLIENT_DEBUG").unwrap() == "true" {
            let db_url = format!("sqlite://:memory:");
            return sea_orm::Database::connect(&db_url).await.unwrap()
        }

        let db_url = format!("sqlite://{}", db_path.to_str().unwrap());
        sea_orm::Database::connect(&db_url).await.unwrap()
    });
}

#[tokio::main]
async fn main() {
    tokio::spawn(async {
        let mut client = DiscordIpcClient::new("1134976220963024917").unwrap();

        client.connect().ok();
        client
            .set_activity(
                activity::Activity::new()
                    .buttons(vec![Button::new("Website", "https://beatforge.net")])
                    .details("Browsing Mods")
                    .assets(Assets::new().large_image("logo").large_text("BeatForge")),
            )
            .ok();
    });
    
    // db needs to block on startup, as migrations are !async
    let db = DATABASE.get().await.clone();
    migration::Migrator::up(&db, None).await.unwrap();

    // detect instances on startup
    tokio::spawn(async {
        commands::detect_instances().await;
    });

    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            commands::get_instances,
            commands::detect_instances,
            commands::add_instance,
            commands::remove_instance,
            commands::get_instance,
            commands::install_mod,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
