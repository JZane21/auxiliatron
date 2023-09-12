const knex = require("knex");
const pgConnection = require("../../config/knex-pg");
console.log(pgConnection);
const db = knex(pgConnection.development);

const getSubjectById = async (id) => {
  try {
    const subject = await db("subject").select("*").where("id",id);
    const subjectJson = {
      id: subject.id,
      name: subject.name,
      description: subject.description,
      credits: subject.credits,
      proffesor: subject.proffesor,
    };
    return subjectJson;
  } catch (e) {
    console.error(e);
    return e;
  }
};

module.exports.getSubjectById = getSubjectById ;
