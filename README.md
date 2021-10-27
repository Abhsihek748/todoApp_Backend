# todoApp_Backend


this is the backend repo for todo app . 
here i have used postgres db

// updated : 
 
 This app is not deplyed  . 

- Steps for how to setup project in local machine is missing ->

 for local machine it was said to use postgres  ,  for using in local machine we have to have postgres installed and have to make a database  and some tables and make changes in the db.js .

 changes in db.js ->

 1.  password - > It will vary for different user as it is required to setup a password  when we install postgre in our local machine .
 2 . database -> change the name of the database to what you want to make it .

 for running it in the local machine you need

 postgres installed , a database in postgres which you have made and two tables in the database .

 code 👍

write these code in cmd local machine

psql -U postgres

then it will ask for password fill the password you used in the postgres installation .

 CREATE DATABASE tododb; // created a database

 \c tododb  // connect to the databse

CREATE TABLE todo(        // made todo table
  todo_id SERIAL PRIMARY KEY,
  description VARCHAR(255)
);
CREATE TABLE todocomplete( // made todocomplete table
  todo_id SERIAL PRIMARY KEY,
  description VARCHAR(255)
);

// you can change the tablesName if you want but then will have to make some more changes in the code .So , i would suggest to only change databse name if u want and change it in the db.js file .

not we are all setup  then use node index.js or nodemon if u want and server should start running .


-postman requests 

when u start the srever it will run on http://localhost:8081 

now the postman requests for testing purposes are 👍

1 . http://localhost:8081/api/todos  -get request 
    
    this will give all the todos available

2. http://localhost:8081/api/todos   - post request and send a todo {json data} . 

   example -> {
             'description' : 'add readme'
              }
      
    this will create a todo . 


// here 'id' is the todo_id todos which you will be able to see by using the
                                           (http://localhost:8081/api/todos  -get request) command .
                                           or (http://localhost:8081/api/completeTodos -get request) comand .


3. http://localhost:8081/api/todos/:id   - get request it will give you a specific todo whose id is specified .

    example ->    http://localhost:8081/api/todos/1


4.  http://localhost:8081/api/todos/:id   - patch request it will update your specific todo whose is spacified with the data you send in json format.

   example ->{
             'description' : 'update readme'
              }
5.  http://localhost:8081/api/todos/:id  - delete request it will delete the specified todo and put it into completetodo list .


6 .http://localhost:8081/api/completeTodos -get request to get all the completeTodos .

7. http://localhost:8081/api/completeTodos/:id - delete request to delete the specified completeTodo .
 
 example ->{
    http://localhost:8081/api/completeTodos/1 -> it will delete completeTodo with 1 temp_id from the database.         
 } 

  tip: use /api/todos/ abd get/completeTodos  get command respectively to see all the data available and select the todo_id for the operation .

  note : you cannot diectly add completeTodo you can only delete todo and it will automatically add it into completeTodo list .


 
- Some dependencies in package.json are development only, you need to categorise them separatly ->  

I didn't deploy it ,its only in the local machine


- Why app.use(cors()) is required? 

 the forums i was looking for postgre said cors() would be useful  and i did it  .
