
exports.up = function(knex) {
    return knex.schema.createTable("exam_types", table => {
        table.increments("id");
        table.string("name");
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable("exam_types");

};
