const express = require("express");
const getUserController = require("../controllers/userIController");
const router = express.Router();

router.get("/user", getUserController);

// router.get('user', (req,res) => {

// });

module.exports = router;