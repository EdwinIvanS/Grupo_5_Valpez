const path = require('path');
const {body} = require('express-validator');

module.exports = [
    body('title')
        .notEmpty().withMessage("Debes ingresar el título del producto").bail()
        .isLength({min: 5}).withMessage("El título debe contener al menos 5 caracteres"),
    body('price')
        .notEmpty().withMessage("Debes ingresar un valor").bail()
        .isNumeric().withMessage("El precio debe ser un número"),
    body('smallDescription')
        .notEmpty().withMessage("Debes ingresar una breve descripción del producto").bail()
        .isLength({min: 20}).withMessage("La Descripción debe contener al menos 20 caracteres"),
    body('images').custom((value, {req})=>{
        let files = req.files;
        let acceptedExtensions = [".jpg", ".png", ".gif", ".jpeg", ".JPG", ".PNG", ".GIF", ".JPEG"];
        
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