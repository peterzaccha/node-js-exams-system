
exports.up = function(knex) {
    return knex.schema.createTable("questions", table => {
        table.increments("id");
        table.string("body");
        table.integer('exam_id').unsigned()

        table.foreign("exam_id").references('exams.id');
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable("questions");

};
