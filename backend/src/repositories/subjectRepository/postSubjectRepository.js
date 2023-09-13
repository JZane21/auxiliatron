const knex = require("knex");
const pgConnection = require("../../config/knex-pg");
console.log(pgConnection);
const db = knex(pgConnection.development);

const postSubject = async (data) => {
  try {
    const { id, name, description, credits, proffesor } = data;
    const newSubject = {
      id: id,
      name: name,
      description: description,
      credits: credits,
      proffesor: proffesor,
    };
    await db("public").table("subject").insert(newSubject);
    return newSubject;
  } catch (e) {
    console.error(e);
    return e;
  }
};

module.exports.postSubject = postSubject;
