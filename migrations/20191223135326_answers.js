
exports.up = function(knex) {
    return knex.schema.createTable("answers", table => {
        table.increments("id");
        table.string("body");
        table.boolean("correct")
        table.integer('question_id').unsigned()
        table.foreign("question_id").references('questions.id');
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable("answers");

};
