const express = require("express");
const router = express.Router();
const UserController = require('./../controller/UserController');

router.post("/:id",(UserController.updateUser));
module.exports = router;