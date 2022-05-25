const express = require('express')
const router  = express.Router();

// implementar los controladores
const productosController = require("../controllers/productos");


// Enrutador productos

router.get("/Cart", productosController.productCart);
router.get("/create", productosController.productCreate);  //OK
router.get("/detail/:id", productosController.productDetail);   //OK
router.get("/edition/:id", productosController.productEdition);


module.exports=router;