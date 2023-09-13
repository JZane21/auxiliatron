const knex = require("knex");
const pgConnection = require("../../config/knex-pg");
console.log(pgConnection);
const db = knex(pgConnection.development);

const getSubjectById = async (id) => {
  try {
    const subject = await db("public").table("subject").where("id", id);
    return subject;
  } catch (e) {
    console.error(e);
    return e;
  }
};

module.exports.getSubjectById = getSubjectById;
