const express = require('express')
const router  = express.Router();

// implementar los controladores
const usersController  = require("../controllers/usersController");

// Enrutador registros
router.get("/login", usersController.login);
router.post("./", usersController.logged);

router.get("/register", usersController.register);
router.post("./", usersController.userCreate);


module.exports=router;