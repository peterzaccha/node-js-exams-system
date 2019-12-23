
exports.up = function(knex) {
    return knex.schema.createTable("exams", table => {
        table.increments("id");
        table.string("name");
        table.integer('exam_type_id').unsigned()
        table.integer('position_id').unsigned()

        table.foreign("exam_type_id").references('exam_types.id');
        table.foreign("position_id").references('positions.id');
        table.integer("time");

      });
};

exports.down = function(knex) {
    return knex.schema.dropTable("exams");

};
