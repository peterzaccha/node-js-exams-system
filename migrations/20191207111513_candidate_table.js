exports.up = function(knex) {
  return knex.schema.createTable("candidates", table => {
    table.increments("id");
    table.string("telephone");
    table.string("email");
    table.string("user_name");
    table.string("cv");
    table.string("password");

  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("candidates");
};
