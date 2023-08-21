const getUser = require("../repositories/userRepositories/userRepository");
const getUserService = async () => {
  const users = await getUser();
  return users;
};

// postgres://auxiliatron_db_user:bwpU9dBVyaMkHrd1kX7O2MRkIIieuAmm@dpg-cjefukunk9qs73aftnh0-a.oregon-postgres.render.com/auxiliatron_db
// host: dpg-cjefukunk9qs73aftnh0-a.oregon-postgres.render.com
// user: auxiliatron_db_user
// password: bwpU9dBVyaMkHrd1kX7O2MRkIIieuAmm
// database: auxiliatron_db
// port: 5432

// solo colocamos --save-dev cuando queremos instalar dependencias que no
// queremos que se encuentren en produccion

// para correr los tests, debemos usar el siguiente comando: npx mocha

// el dev debe hacer los test cases

module.exports = getUserService;
