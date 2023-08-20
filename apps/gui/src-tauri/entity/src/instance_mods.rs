//! `SeaORM` Entity. Generated by sea-orm-codegen 0.11.3

use sea_orm::entity::prelude::*;
use serde::{Deserialize, Serialize};

#[derive(Clone, Debug, PartialEq, DeriveEntityModel, Eq, Serialize, Deserialize)]
#[sea_orm(table_name = "instance_mods")]
pub struct Model {
    #[sea_orm(primary_key)]
    pub id: i32,
    pub instance_id: i32,
    pub mod_id: String,
    pub timestamp: DateTimeUtc,
}

#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]
pub enum Relation {
    #[sea_orm(
        belongs_to = "super::instances::Entity",
        from = "Column::Id",
        to = "super::instances::Column::Id",
        on_update = "Cascade",
        on_delete = "Cascade"
    )]
    SelfRef,
}

impl ActiveModelBehavior for ActiveModel {}
