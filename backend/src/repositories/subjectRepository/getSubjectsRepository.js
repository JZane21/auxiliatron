const knex = require("knex");
const pgConnection = require("../../config/knex-pg");
console.log(pgConnection);
const db = knex(pgConnection.development);

const getSubjects = async () => {
  try {
    const subject = await db("public").table("subject").select("*");
    const subjectJson = subject.map((row) => ({
      id: row.id,
      name: row.name,
      description: row.description,
      credits: row.credits,
      proffesor: row.proffesor,
    }));
    return subjectJson;
  } catch (e) {
    console.error(e);
    return e;
  }
};

module.exports.getSubjects = getSubjects;
