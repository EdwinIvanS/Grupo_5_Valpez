const express = require('express')
const router  = express.Router();
const mainController = require("../controllers/mainController");

// Enrutador index
router.get("/", mainController.home);  // Traer todos los productos OK
router.get("/search", mainController.search);
router.get("/aboutUs", mainController.aboutUs);
router.get("/conditions", mainController.conditions);
router.get("/contacts", mainController.contacts);
router.get("/payment", mainController.payment);
router.get("/privacy", mainController.privacy);
router.get("/warranty", mainController.warranty);
router.get("/whereToCamping", mainController.whereToCamping);
router.get("/whereToFish", mainController.whereToFish);
router.get("/adventures", mainController.adventures);

module.exports=router;