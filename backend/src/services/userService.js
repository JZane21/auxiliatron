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

// tenemos que hacer un MonkData, es decir, falsificar datos para realizar
// pruebas

// debemos devolver los datos que nos da la funcion Monkeada, es decir, llena
// de datos con la siguiente forma:
// const mockNameData = {
//   faker dates
// }

// todos los lenguajes deben usar .env, con el fin de que puedan ser
// usadas desde cualquier parte del backend (en este caso), ya sea
// para referenciar a la base de datos, establecer el puerto de
// conexion, etc

// npm install dotenv

// Para JavaScript se tiene ESLint, una herramienta que ayuda a que todo
// se unifique en un solo formato de codigo
// npm install eslint --save-dev
// crear el archivo .eslintrc.js

// utilizando Knex, podremos establecer el codigo de JavaScript

module.exports = getUserService;
