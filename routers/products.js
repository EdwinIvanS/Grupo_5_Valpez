const express = require('express')
const router  = express.Router();

// implementar los controladores
const productsController = require("../controllers/productsController");


// Enrutador productos
router.get("/", productsController.index); //Listado de productos.
router.get("/camping", productsController.camping);
router.get("/fishing", productsController.fishing);

//Carrito
router.get("/Cart", productsController.productCart); //OK

//Creación de producto
router.get("/create", productsController.productCreate);  //OK
router.post("/", productsController.store);

//Detalle de producto
router.get("/detail/:id", productsController.productDetail);   //OK

//Edición de producto
router.get("/edition/:id", productsController.productEdition); //OK
router.put("/detail/:id", productsController.update);

//Eliminación de producto
router.delete("/detail/:id", productsController.destroy);


module.exports=router;