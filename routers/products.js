const express = require('express')
const router  = express.Router();
const path = require('path');
const multer = require('multer');
const {body} = require('express-validator');
// implementar los controladores
const productsController = require("../controllers/productsController");

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

const validateCreateProducts =[
    body('title')
        .notEmpty().withMessage("Debes ingresar el título del producto"),
    body('price')
        .notEmpty().withMessage("Debes ingresar un valor").bail()
        .isNumeric().withMessage("El precio debe ser un número"),
    body('detailedDescription').notEmpty().withMessage("Debes ingresar una descripción"),
    body('images').custom((value, {req})=>{
        let files = req.files;
        let acceptedExtensions = [".jpg", ".png", ".gif", ".jpeg"];
        
        if(files){
            for(let i = 0; i < files.length; i++){
                let fileExtension = path.extname(files[i].originalname);
                if(!acceptedExtensions.includes(fileExtension)){
                    throw new Error('Las extensiones del archivo permitidas son: ' + acceptedExtensions.join(', '))
                }
                break;
            }         
        }
        return true;
    }),
    body('units')
        .notEmpty().withMessage("Debes ingresar una cantidad").bail()
        .isNumeric().withMessage("Debes ingresar un valor numerico"),
    body('colors')
        .notEmpty().withMessage("Debes ingresar uno o varios colores"),   
    body('size')
        .notEmpty().withMessage("Debes ingresar uno o varios tamaños")
]


// Enrutador productos
router.get("/", productsController.index); 
router.get("/camping", productsController.camping);
router.get("/pesca", productsController.fishing);

//Carrito
router.get("/Cart", productsController.productCart); 

//Creación de producto  
router.get("/create", productsController.productCreate);  //OKKK
router.post("/create", uploadFile.array("images", 4), validateCreateProducts, productsController.store);

//Detalle de producto
router.get("/detail/:id", productsController.productDetail);   

//Edición de producto
router.get("/edition/:id", productsController.productEdition);
router.put("/detail/:id", uploadFile.array("images", 4), productsController.update);

//Eliminación de producto
router.delete("/detail/:id", productsController.destroy);


module.exports=router;