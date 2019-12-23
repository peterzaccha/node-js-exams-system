require("dotenv").config();
var knex = require("knex")({
    client: "mysql",
    connection: {
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME
    },
    useNullAsDefault:true
  });


  module.exports.Candidate = class Candidate {
  constructor(obj) {
    this.user_name = obj.user_name;
    this.password = obj.password;
    this.email = obj.email;
    this.telephone = obj.telephone;
  }

  save() {
    return knex("candidates").insert({
      user_name: this.user_name,
      email: this.email,
      password: this.password,
      telephone: this.telephone,
      cv:"hjdsgjhgjhdsgjhdf"
    });
  }
};
