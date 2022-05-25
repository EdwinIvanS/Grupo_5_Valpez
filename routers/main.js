const express = require('express')
const router  = express.Router();

// implementar los controladores
const mainController = require("../controllers/mainController");

// Enrutador index
router.get("/", mainController.home);  // Traer todos los productos OK
router.get("/search", mainController.search);


module.exports=router;