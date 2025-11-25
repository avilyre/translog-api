import type { Knex } from 'knex';


export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('transactions', table => {
    table.uuid('id').primary();
    // INDEX permite que o Banco de dados crie uma otimização para esse campo imaginando que
    // ele será muito usado nas buscas em WHERE
    table.uuid('session_id').index();
    table.text('description').notNullable();
    table.decimal('amount').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
  });
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('transactions');
}

