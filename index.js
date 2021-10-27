const express = require("express");   
const app = express();
const cors = require("cors");

const todosRouter = require('./Routes/todosRouter') ; // todo router
const completeTodoRouter = require('./Routes/completeTodoRouter') ; // completeTodo Router

app.use(cors());
app.use(express.json());                      // for reading req.body 

app.use('/api/todos',todosRouter);       // using app.use to link /api/todos to todosRouter
app.use('/api/completeTodos',completeTodoRouter);  // // using app.use to link /api/todos to completeTodoRouter

app.listen(process.env.PORT||8081, function () {    // listen on port
    console.log("server started");
})