
exports.up = function(knex) {
    return knex.schema.createTable("candidate_exams", table => {
        table.increments("id");
        table.integer('exam_id').unsigned()
        table.integer('candidate_id').unsigned()

        table.foreign("exam_id").references('exams.id');
        table.foreign("candidate_id").references('candidates.id');
        table.integer('score');
        table.integer('order');
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable("candidate_exams");

};
