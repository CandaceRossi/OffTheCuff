
exports.up = function(knex) {
return knex.schema.createTable("posts", col => {
    col.increments("posts_id")
    .notNullable()
    .unique()
    col.varchar("title", 255)
      .notNullable()
    col.text('description', 255)
      .notNullable();
    col.timestamp('create_at').defaultTo(knex.fn.now())
  })

};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("posts");
};
