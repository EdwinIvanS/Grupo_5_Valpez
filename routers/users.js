const express = require('express')
const router  = express.Router();
const usersController  = require("../controllers/usersController"); // implementar los controladores

//middleware
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

const uploadFile = require('../middlewares/imageStorage/users');

const usersValidations = require('../middlewares/validations/users');

const loginValidations = require('../middlewares/validations/login');

// Enrutador usuarios
router.get("/login", guestMiddleware, usersController.userLogin);
router.post("/login", loginValidations, usersController.login);

router.get("/register", guestMiddleware, usersController.userCreate);
router.post("/register", uploadFile.single('photo'), usersValidations, usersController.store);

// profile
router.get("/profile", authMiddleware, usersController.profile);

//edit profile
router.get("/edit", authMiddleware, usersController.userEdition);
router.put("/edit", uploadFile.single('photo'), usersValidations, usersController.update);

//delete profile
router.delete("/delete", usersController.destroy);

//Logout
router.get("/logout", usersController.logout);

module.exports=router;