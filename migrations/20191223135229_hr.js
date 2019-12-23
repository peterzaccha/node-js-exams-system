
exports.up = function(knex) {
    return knex.schema.createTable("hrs", table => {
        table.increments("id");
        table.string("email");
        table.string("user_name");
        table.string("password");
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable("hrs");

};
