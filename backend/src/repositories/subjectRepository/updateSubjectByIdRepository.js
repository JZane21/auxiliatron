const knex = require("knex");
const pgConnection = require("../../config/knex-pg");
console.log(pgConnection);
const db = knex(pgConnection.development);

const updateSubjectById = async (id,data) => {
  try {
    await db("subject").where("id",id).update({...data});
  } catch (e) {
    console.error(e);
  }
};

module.exports.updateSubjectById = updateSubjectById ;
