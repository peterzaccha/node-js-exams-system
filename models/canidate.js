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
  constructor() {
  }

  create(obj,cvPath)
  {
    this.user_name = obj.user_name;
    this.password = obj.password;
    this.email = obj.email;
    this.telephone = obj.telephone;
    this.cv='/files/'+cvPath
  }

  fill(obj){
      this.id=obj.id
    this.user_name = obj.user_name;
    this.password = obj.password;
    this.email = obj.email;
    this.telephone = obj.telephone;
    this.cv=obj.cv
  }
  save() {
    return knex("candidates").insert([{
      user_name: this.user_name,
      email: this.email,
      password: this.password,
      telephone: this.telephone,
      cv:this.cv
    }]).then(() => console.log("data inserted"))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        knex.destroy();
    });
  }

  all()
  {
        return knex.select().table('candidates')
  }
  where(obj)
  {
      var self=this
      knex('candidates').where(obj).first().select()
     .then(function(data){
        self.user_name=data.user_name
        self.password=data.password
        self.telephone=data.telephone
        self.cv=data.cv
        self.email=data.email
        self.id=data.id
     })
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        knex.destroy();
    });
    this.fill(self)

  }

};
