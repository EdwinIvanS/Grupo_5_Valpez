const express = require('express')
const router  = express.Router();
const path = require('path');
const multer = require('multer');
const {body} = require('express-validator');

//middleware
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');



//Multer
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(__dirname, '../public/img/Users'));
    },
    filename: function(req, file, cb){
        cb(null, "img - " + Date.now() + path.extname(file.originalname));
    }
});

const uploadFile = multer({storage});

//validator

const validateRegister =[
    body('name').notEmpty().withMessage("Debes ingresar nombre completo"),
    body('user')
        .notEmpty().withMessage("Debes ingresar usuario").bail()
        .isLength({min: 4, max: 10}).withMessage("El usuario debe contener entre 4 y 10 caracteres"),
    body('email')
        .notEmpty().withMessage("Debes ingresar un correo electrónico").bail()
        .isEmail().withMessage("El correo es inválido"),
    body('dob').notEmpty().withMessage("Debes ingresar fecha de nacimiento"),
    body('photo').custom((value, {req})=>{
        let file = req.file;
        let acceptedExtensions = [".jpg", ".png", ".gif", ".jpeg"];
        if(file){
            let fileExtension = path.extname(file.originalname);
            if(!acceptedExtensions.includes(fileExtension)){
                throw new Error('Las extensiones del archivo permitidas son: ' + acceptedExtensions.join(', '))
            }
        }
        return true;
    }),
    body('password')
        .notEmpty().withMessage("Debes ingresar una contraseña").bail()
        .isAlphanumeric().withMessage("La contraseña debe combinar letras y números")
        .isLength({min: 6, max: 10}).withMessage("La contraseña debe contener entre 6 y 10 caracteres"),
    body('confirmPassword').custom((value, {req})=>{
        if(req.body.password != req.body.confirmPassword){
            throw new Error("Las contraseñas debe coincidir");
        }
        return true;
    })
]

// implementar los controladores
const usersController  = require("../controllers/usersController");

// Enrutador registros
router.get("/login", guestMiddleware, usersController.login);
router.post("/login", usersController.loginProcess);

router.get("/register", guestMiddleware, usersController.register);
router.post("/register", uploadFile.single('photo'), validateRegister, usersController.userCreate);

// profile
router.get("/profile", authMiddleware, usersController.profile);

//Logout
router.get("/logout", usersController.logout);

module.exports=router;