const getUser =  require("../repositories/userRepository");

const getUserService = async () => {
  // aqui debemos conectarnos a la BD, para poner en marcha la logica de negocio
  return await getUser();
};

module.exports = getUserService;
