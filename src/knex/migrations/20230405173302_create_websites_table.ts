import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('websites', (table) => {
    table.increments('id').primary();
    table.string('url').notNullable();
    table.text('description').notNullable();
    table.date('date').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('websites');
}
