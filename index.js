const express = require("express");
const app = express();
const cors = require("cors");

const todosRouter = require('./Routes/todosRouter') ;
const completeTodoRouter = require('./Routes/completeTodoRouter') ;

app.use(cors());
app.use(express.json());

app.use('/api/todos',todosRouter);
app.use('/api/completeTodos',completeTodoRouter);

app.listen(process.env.PORT||8081, function () {
    console.log("server started");
})