const express = require('express')
const router  = express.Router();

// implementar los controladores
const principalController = require("../controllers/principal");

// Enrutador index
router.get("/", principalController.home);  // Traer todos los productos OK


module.exports=router;