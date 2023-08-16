const knex = require("knex");
const mysqlConnection = require("../config/knex.mysql");

const db = knex.knex(mysqlConnection);

const getUser = async () => {
  try{
    const users = await db("users").select("*").where({name: "Jose"});
    return users;
  }catch(err){
    console.error(err);
  }
};

module.exports = getUser;