

export default class Candidate{
    constructor(obj)
    {
        this.user_name=obj.user_name
        this.password=obj.password
        this.email=obj.email
        this.telephone=obj.telephone
    }

    save()
    {
       return knex('users').insert({
        user_name: this.user_name,
        email:this.email,
        password:this.password,
        telephone:this.telephone})
    }
}