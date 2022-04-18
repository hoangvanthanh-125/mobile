const express = require("express");
const checkLogin = require("../middleWare/checkLogin");
const router = express.Router();
const ListTodoController = require('./../controller/ListTodoController');
router.use(checkLogin);

router.post("/post",ListTodoController.postTodo);
router.put('/:id',ListTodoController.updateTodo);
router.delete("/:id",ListTodoController.deleteTodo);
router.get("/:idUser",ListTodoController.getTodoByIdUser);
module.exports = router;