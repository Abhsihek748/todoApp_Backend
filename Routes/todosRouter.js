const express = require("express");
const todosRouter = express.Router();
const {getElement, getElements, createElement, updateElement, deleteElement} = require('../factory/factory') ;  // get all the required functions from the factory file
                             
getTodos = getElements("todo");        // passing the table name so that the function are working the specified table
createTodo = createElement("todo");
getTodo = getElement("todo");
updateTodo = updateElement("todo");
deleteTodo = deleteElement("todo");

// routes

todosRouter.route('/')      
.get(getTodos)       // this will route to the api/todos and make get request wich will return all todos  
.post(createTodo);   // this will make a post request to the api/todos and add todo to the database

todosRouter.route('/:id')        // id is variable and used for specifying a todo
.get(getTodo)                    // get specific todo
.patch(updateTodo)               // edit specific todo
.delete(deleteTodo);             // delete specific todo
                                 
module.exports = todosRouter;    // expoting todosRouter .