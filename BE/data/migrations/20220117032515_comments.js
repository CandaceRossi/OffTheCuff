exports.up = function(knex) {
    return knex.schema.createTable("comments", col => {
        col.increments("comments_id")
            .notNullable()
            .unique()
        col.varchar('name', 255)
            .notNullable()
        col.text('description', 255)
            .notNullable();
        col
            .integer("posts_id")
            .unsigned()
            .notNullable()
            .references("posts_id")
            .inTable("posts")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        col.timestamp('create_at').defaultTo(knex.fn.now())
    })

};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("comments");
};