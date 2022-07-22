const express = require('express')
const router  = express.Router();
const usersController  = require("../controllers/usersController"); // implementar los controladores

//middleware
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

//validator
const validateRegister = require('../middlewares/validations/registerMiddleware');

//Multer
const uploadFile = require('../middlewares/imageStorage/userMiddleware')

// Enrutador usuarios
router.get("/login", guestMiddleware, usersController.login);
router.post("/login", usersController.loginProcess);

router.get("/register", guestMiddleware, usersController.register);
router.post("/register", uploadFile.single('photo'), validateRegister, usersController.userCreate);

// profile
router.get("/profile", authMiddleware, usersController.profile);

//edit profile
router.get("/profile/edit/:id", authMiddleware, usersController.edition);
router.put("/profile/edit/:id", usersController.userEdit);

//delete profile
router.delete("/profile/delete/:id", usersController.delete);

//Logout
router.get("/logout", usersController.logout);

module.exports=router;