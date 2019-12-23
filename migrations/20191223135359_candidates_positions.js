
exports.up = function(knex) {
    return knex.schema.createTable("candidate_positions", table => {
        table.increments("id");
        table.integer('position_id').unsigned()
        table.integer('candidate_id').unsigned()
        table.foreign("position_id").references('positions.id');
        table.foreign("candidate_id").references('candidates.id');
        table.boolean('approve').nullable();
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable("candidate_positions");
};
