const express = require('express')
const router  = express.Router();
const apiControllerUsers = require('../../controllers/api/apiControllerUsers');

router.get("/", apiControllerUsers.consultaUser);
router.get("/:id", apiControllerUsers.consultaUserId);

module.exports=router;