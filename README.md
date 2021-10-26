# todoApp_Backend

deploy : https://floating-ridge-60992.herokuapp.com/

this is the backend repo for todo app . 
here i have used postgres db

// /api/todos
for adding new todo use post request
for getting all todos use get request

for editing a todo use /:id -> id is sno of todo 
by deleting todo it will automatically be added into completeTodo list

// /api/completeTodos 
for getting completeTodo use get
for deleting completeTodo use :/id and delete request
