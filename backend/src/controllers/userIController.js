const getUserService = require("../services/userService");

const getUserController = async (req,res) => {
  // call service

  const response = await getUserService();
  try{

  }catch(err){
    return res.status(500).json({
      success: false,
      message: "error retrieving Users",
      error: err.message
    });
  };
  res.status(200).json(response);
};

module.exports = getUserController;
