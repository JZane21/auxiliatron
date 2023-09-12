/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('subject', function (table) {
        table.integer('id').primary();
        table.string('name').notNullable();
        table.string('description').notNullable();
        table.integer('credits').notNullable();
        table.string('proffesor').notNullable();
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('subject');
};
