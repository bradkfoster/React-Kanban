
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cards', (table)=>{
    table.increments('id');
    table.string('title').notNullable();
    table.string('priority').notNullable();
    table.string('status').notNullable();
    table.string('created_by').notNullable();
    table.string('assigned_to').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cards');
};
