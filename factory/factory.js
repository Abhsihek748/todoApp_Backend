const pool = require('../db') ; // database connection

// this is the factory file and here the function for CRUD operations are written and the table variable is used to decide which table to use crud operation.
 
function createElement(table){                   // create element in table
    return async(req,res)=>{
      try{
       const {description} = req.body ;
       const newTodo = table === "todo"? await  pool.query("INSERT INTO todo( description ) VALUES($1) RETURNING* ",[description]) 
                                       : await  pool.query("INSERT INTO todocomplete ( description ) VALUES($1) RETURNING* ",[description]) 
       res.json(newTodo.rows[0]);
      }
      catch(err){
        console.error(err.message);
      }
    }
}

function getElements(table){         // get all data from the table
    return async(req,res)=>{
        try{
         let allTodo = table === "todo"?await  pool.query("SELECT* FROM todo ")
                                       :await  pool.query("SELECT* FROM todocomplete ") 
         res.json(allTodo.rows);
        }
        catch(err){
          console.error(err.message);
        }
      }
  }

function getElement(table){        // get specified data feom table
    return async(req,res)=>{
        try{
         const id = req.params.id ;
         const Todo =table === "todo"? await  pool.query("SELECT* FROM todo WHERE todo_id = $1 ",[id]) 
                                     : await  pool.query("SELECT* FROM todocomplete WHERE todo_id = $1 ",[id]) 
         res.json(Todo.rows[0]);
        }
        catch(err){
          console.error(err.message);
        }
      }
  }

  function updateElement(table){       // update speciific data in the table
    return async(req,res)=>{
        try{
         const id = req.params.id ;
         const {description} = req.body ;
         const UpdateTodo =table === "todo"? await  pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2 ",[description,id])
                                           : await  pool.query("UPDATE todocomplete SET description = $1 WHERE todo_id = $2 ",[description,id])
         res.json("todo Updated");
        }
        catch(err){
          console.error(err.message);
        }
      }
  }

  function deleteElement(table){                    // delete specified data in the table
    return async(req,res)=>{
        try{
         const id = req.params.id ;
         if(table === "todo")
         {
            const data = await pool.query("SELECT* FROM todo WHERE todo_id = $1 ",[id]);
            req.body.description = data.rows[0].description;
         }

         const deleteTodo =table === "todo"? await  pool.query("DELETE FROM todo WHERE todo_id = $1 ",[id]) 
                                           : await  pool.query("DELETE FROM todocomplete WHERE todo_id = $1 ",[id])

         if(table == "todo"){
             await pool.query("INSERT INTO todocomplete ( description ) VALUES($1)",[req.body.description]);
         }
         res.json("data deleted successfully");
        }
        catch(err){
          console.error(err.message);
        }
      } 
  }

   // exporting the functions .

  module.exports.getElement = getElement;
  module.exports.getElements = getElements;
  module.exports.createElement = createElement;
  module.exports.updateElement = updateElement;
  module.exports.deleteElement = deleteElement;