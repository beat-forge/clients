use sea_orm_migration::{prelude::*, sea_orm::Statement};

#[derive(DeriveMigrationName)]
pub struct Migration;

#[async_trait::async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        // Replace the sample below with your own migration scripts
        manager
            .create_table(
                Table::create().table(Instances::Table).if_not_exists().col(
                    ColumnDef::new(Instances::Id)
                        .integer()
                        .not_null()
                        .auto_increment()
                        .primary_key(),
                ).col(
                    ColumnDef::new(Instances::Name)
                        .string()
                        .not_null()
                        .unique_key(),
                ).col(
                    ColumnDef::new(Instances::Path)
                        .string()
                        .not_null()
                        .unique_key(),
                ).col(
                    ColumnDef::new(Instances::Version)
                        .string()
                        .not_null(),
                ).col(
                    ColumnDef::new(Instances::IsModded)
                        .boolean()
                        .not_null()
                        .default(false),
                ).col(
                    ColumnDef::new(Instances::Timestamp)
                        .text()
                        .not_null()
                        .default(Expr::current_timestamp())
                ).to_owned()
            ).await?;

        manager.create_table(
            Table::create().table(InstanceMods::Table).if_not_exists().col(
                ColumnDef::new(InstanceMods::Id)
                    .integer()
                    .not_null()
                    .auto_increment()
                    .primary_key()
            )
            .col(
                ColumnDef::new(InstanceMods::Timestamp)
                    .text()
                    .not_null()
                    .default(Expr::current_timestamp())
            )
            .col(
                ColumnDef::new(InstanceMods::ModId)
                    .text() //uuid
                    .not_null()
            ).to_owned()
        ).await?;

        manager.get_connection().execute(
            Statement::from_string(sea_orm::DatabaseBackend::Sqlite, "alter table instance_mods add instance_id integer references instances(id);")
        ).await?;

        Ok(())
    }

    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        // Replace the sample below with your own migration scripts
        manager
            .drop_table(Table::drop().table(InstanceMods::Table).to_owned())
            .await?;

        manager
            .drop_table(Table::drop().table(Instances::Table).to_owned())
            .await

    }
}

/// Learn more at https://docs.rs/sea-query#iden
#[derive(Iden)]
enum Instances {
    Table,
    Id,
    Name,
    Path,
    Version,
    IsModded,
    Timestamp
}

#[derive(Iden)]
enum InstanceMods {
    Table,
    Id,
    InstanceId,
    ModId,
    Timestamp
}