const knex = require("knex");
const pgConnection = require("../../config/knex-pg");
console.log(pgConnection);
const db = knex(pgConnection.development);

const deleteSubjectById = async (id) => {
  try {
    await db("subject").where("id", id).del();
  } catch (e) {
    console.error(e);
  }
};

module.exports.deleteSubjectById = deleteSubjectById;
