const express = require('express')
const router  = express.Router();
const mainController = require("../controllers/mainController");

// Enrutador index
router.get("/", mainController.home);  // Traer todos los productos OK
router.get("/search", mainController.search);


module.exports=router;