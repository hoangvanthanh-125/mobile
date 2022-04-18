const ListTodoModel = require('./../model/listTdo.model');
class ListTodoController {
  //post /list/post
  postTodo = async(req,res) => {
    const data = req.body;

    try {
    const newTodo = new ListTodoModel(data);
    const todo = await newTodo.save();
    if(!todo) {
      return res.status(400).json('bad request');
    }
    res.status(200).json(todo);
    } catch (error) {
      res.status(500).json('server error')
    }

  }

  getTodoByIdUser = async(req,res) => {
    const {idUser} = req.params;
    try {
      const listTodo = await ListTodoModel.find({idUser});
      if(!listTodo){
        return res.status(400).json('bad request');
      }
      res.status(200).json(listTodo);

    } catch (error) {
      res.status(500).json('server error')
    }
  }
  
  updateTodo = async(req,res) => {
    const {id} = req.params;
    const data = req.body;
    try {
      const updateTodo = await ListTodoModel.findOneAndUpdate({_id:id},data,{
        new:true
      })
      if(!updateTodo){
        return res.status(400).json('bad request');

      }
      res.status(200).json(updateTodo);
    } catch (error) {
      res.status(500).json('server error')
    }
  }
  
  deleteTodo = async(req,res) => {
    const {id} = req.params;
    try {
      const deleteTodo = await ListTodoModel.deleteOne({_id:id});
      if(!deleteTodo){
        return res.status(400).json('bad request');

      }
      res.status(200).json(deleteTodo);
    } catch (error) {
      res.status(500).json('server error')
    }
  }
}
module.exports = new ListTodoController;