const express = require("express");
var bodyParser = require('body-parser')
var cors = require('cors')
const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

const PORT = 4000 || process.env.PORT;
const mongoose = require('mongoose');
const URI = "mongodb://thanh125:yeulol21@mobile-shard-00-00.uuom0.mongodb.net:27017,mobile-shard-00-01.uuom0.mongodb.net:27017,mobile-shard-00-02.uuom0.mongodb.net:27017/todo-list?ssl=true&replicaSet=atlas-w6jv4v-shard-0&authSource=admin&retryWrites=true&w=majority"
const userRouter =  require('./routes/user.route');
const authRouter = require('./routes/auth.route');
const todoListRouter = require('./routes/listTodo.route')
mongoose.connect(URI).then(res =>{
  console.log("Connect successfully");
}).catch(e => {
  console.log("connect failed")
})
// app.get("/list/:id");
app.use("/users",userRouter);
app.use("/auth",authRouter)
app.use("/list",todoListRouter)
app.get('/',(req,res) => {
  res.json('hello')
})
app.listen(PORT, () => console.log(`app chay cong ${PORT}`) );