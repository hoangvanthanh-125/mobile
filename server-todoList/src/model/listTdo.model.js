const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const TodoList = new Schema({
  content: {
    type: String,
    required: true
  },
  status:{
    type:String,
    default:'notdone'
    
  },
  idUser:{
    type:Schema.Types.Mixed,
    required:true
  }
}, {
  timestamps: true
})
module.exports = mongoose.model('listTodo', TodoList);