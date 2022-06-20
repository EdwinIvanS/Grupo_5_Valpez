const express = require('express')
const router  = express.Router();
const path = require('path');
const multer = require('multer');
const rootMiddleware = require('../middlewares/rootMiddleware')

//Multer
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(__dirname, '../public/img/Products'));
    },
    filename: function(req, file, cb){
        cb(null, "img - " + Date.now() + path.extname(file.originalname));
    }
});

const uploadFile = multer({storage});

// implementar los controladores
const productsController = require("../controllers/productsController");


// Enrutador productos
router.get("/", productsController.index); //Listado de productos.
router.get("/camping", productsController.camping);
router.get("/pesca", productsController.fishing);

//Carrito
router.get("/Cart", productsController.productCart); //OK

//Creación de producto
router.get("/create", rootMiddleware, productsController.productCreate);  //OK
router.post("/", uploadFile.array("images", 4),productsController.store);

//Detalle de producto
router.get("/detail/:id", productsController.productDetail);   //OK

//Edición de producto
router.get("/edition/:id", rootMiddleware, productsController.productEdition); //OK
router.put("/detail/:id", uploadFile.array("images", 4), productsController.update);

//Eliminación de producto
router.delete("/detail/:id", productsController.destroy);


module.exports=router;