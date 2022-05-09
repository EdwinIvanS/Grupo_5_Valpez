const express = require('express')
const router  = express.Router();

// implementar los controladores
const principalController = require("../controllers/principal");
const productosController = require("../controllers/productos");
const registroController  = require("../controllers/registro");

// Enrutador index
router.get("/", principalController.home);

// Enrutador productos
router.get("/productCart"  , productosController.productCart);
router.get("/productCreate", productosController.productCreate);
router.get("/productDetail/:id", productosController.productDetail);
router.get("/productEdition/:id", productosController.productEdition);

// Enrutador registros
router.get("/login"   , registroController.login);
router.get("/register", registroController.register);


module.exports=router;