const express = require("express");
const todosRouter = express.Router();
const {getElement, getElements, createElement, updateElement, deleteElement} = require('../factory/factory') ;

getTodos = getElements("todo");
createTodo = createElement("todo");
getTodo = getElement("todo");
updateTodo = updateElement("todo");
deleteTodo = deleteElement("todo");

todosRouter.route('/')
.get(getTodos)
.post(createTodo);

todosRouter.route('/:id')
.get(getTodo)
.patch(updateTodo)
.delete(deleteTodo);

module.exports = todosRouter;