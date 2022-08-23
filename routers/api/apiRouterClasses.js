const express = require('express')
const router  = express.Router();
const apiControllerClasses = require('../../controllers/api/apiControllerClasses');

router.get("/", apiControllerClasses.consultaClass)

module.exports=router;