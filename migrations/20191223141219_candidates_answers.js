
exports.up = function(knex) {
    return knex.schema.createTable("candidate_answers", table => {
        table.increments("id");
        table.integer('question_id').unsigned()
        table.integer('candidate_id').unsigned()
        table.integer('exam_id').unsigned()
        table.integer('answer_id').unsigned()
        table.foreign("question_id").references('questions.id');
        table.foreign("candidate_id").references('candidates.id');
        table.foreign("exam_id").references('exams.id');
        table.foreign("answer_id").references('answers.id');
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable("candidate_answers");
};
