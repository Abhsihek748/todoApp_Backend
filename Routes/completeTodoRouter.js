const express = require("express");
const completeTodoRouter = express.Router();
const  {getElements, createElement, deleteElement} = require('../factory/factory') ;

getTodos = getElements("todocomplete");
createTodo = createElement("todocomplete");
deleteTodo = deleteElement("todocomplete");

completeTodoRouter.route('/')
.get(getTodos)
.post(createTodo);

completeTodoRouter.route('/:id')
.delete(deleteTodo);

module.exports = completeTodoRouter;

