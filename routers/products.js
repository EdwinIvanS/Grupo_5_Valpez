const express = require('express')
const router  = express.Router();

// implementar los controladores
const productsController = require("../controllers/productsController");

//middlewares
const rootMiddleware = require('../middlewares/rootMiddleware');

const uploadFile = require('../middlewares/imageStorage/products');

const productsValidations = require('../middlewares/validations/products');

// Get productos
router.get("/", productsController.index); 
router.get("/camping", productsController.camping);
router.get("/pesca", productsController.fishing);

//Carrito
router.get("/cart", productsController.productCart); 

//Creación de producto  
router.get("/create", rootMiddleware, productsController.productCreate);  //OKKK
router.post("/create", uploadFile.array("images", 4), productsValidations, productsController.store);

//Detalle de producto
router.get("/detail/:id", productsController.productDetail);   

//Edición de producto
router.get("/edit/:id", rootMiddleware, productsController.productEdition);
router.put("/edit/:id", uploadFile.array("images", 4), productsValidations, productsController.update);

//Eliminación de producto
router.delete("/delete/:id", productsController.destroy);


module.exports=router;