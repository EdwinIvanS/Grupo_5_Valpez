const express = require('express')
const router  = express.Router();
const apiControllerProducts = require('../../controllers/api/apiControllerProducts');

router.get("/", apiControllerProducts.consultaProduct);
router.get("/:id", apiControllerProducts.consultaProductId);

module.exports=router;