const express = require("express");
const completeTodoRouter = express.Router();
const  {getElements, createElement, deleteElement} = require('../factory/factory') ;  // get all the required functions from the factory file

getTodos = getElements("todocomplete");   // // passing the table name so that the function are working the specified table
createTodo = createElement("todocomplete");
deleteTodo = deleteElement("todocomplete");

// routes

completeTodoRouter.route('/') 
.get(getTodos)   //// this will route to the api/completeTodos and make get request wich will return all Complete todos 
.post(createTodo);   // this will make a post request to the api/completeTodos and add Completetodo to the database

completeTodoRouter.route('/:id')    // id is variable and used for specifying a Complete todo
.delete(deleteTodo); // // delete specific todo

module.exports = completeTodoRouter;

