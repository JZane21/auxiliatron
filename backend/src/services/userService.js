const getUser = require("../repositories/userRepository/userRepository");
const userRepository = require("../repositories/userRepository/userRepository");
const logger = require('../utils/logger');

const getUserService = async () => {
  try {
    logger.info("getUserService - Fetching users from the database"); 
    const users = await userRepository.getUser();
    logger.info("getUserService - Users fetched successfully!");
    return users;
  } catch (error) {
    logger.error("getUserService - Error fetching users: ", error); // Agregar log en caso de error
    throw error;
  }
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
module.exports =  getUserService;
