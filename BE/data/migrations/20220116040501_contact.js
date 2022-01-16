
exports.up = function(knex) {
return knex.schema.createTable("contact", col => {
    col.increments("contact_id")
    .notNullable()
    .unique()
    col.varchar('name', 255)
      .notNullable()
    col.varchar("email", 255)
      .notNullable()
    col.text('description', 255)
      .notNullable();
    col.timestamp('create_at').defaultTo(knex.fn.now())
  })

};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("contact");
};