const express = require('express')
const router  = express.Router();
const apiControllerUsers = require('../../controllers/api/apiControllerUsers');

router.get("/", apiControllerUsers.consulta);
router.get("/:id", apiControllerUsers.consultaId);

module.exports=router;