/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
        .createTable('faqs', (table) => {
            table.increments('id').primary();
            table.string('question', 255).notNullable();
            table.text('answer').notNullable();
        })
        .createTable('requests', (table) => {
            table.increments('id').primary();
            table.string('name', 255);
            table.string('email', 255);
            table.text('message');
            table.timestamp('created_at').defaultTo(knex.fn.now());
        });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
        .dropTableIfExists('requests')
        .dropTableIfExists('faqs');
};
