const getUserService = require("../services/userService");

const getUserController = (req,res) => {
  // call service
  // const response = getUserServices;
  // return response = getUserService;
  return res.send("hola mundo");
};

module.exports = getUserController;
