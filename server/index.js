// LOAD DEPENDENCIES ----------------------------------------------------
// load express 
const express = require('express')

// init express app 
const app = express()

// load cors 
const cors = require('cors')

// load db connect
const pool = require('./db')


// MIDDLEWARE ------------------------------------------------------------
// use cors in app 
app.use(cors())
app.use(express.json()) // get only body of request from client side  

// ROUTES ------------------------------------------------------------
// create a new todo 

app.post("/todos", async (req,res) => {

    try {

        const { description } = req.body // client-side received payload
        const addTodo = await pool.query(
            "INSERT INTO todo (description) VALUES($1) RETURNING * ", 
            [description]
        )
        
        res.json(addTodo.rows)

    } catch (error) {
        console.log(error.message)
    }

})

// get all todos

app.get("/todos", async (req,res) => {

    try {

        const allTodos = await pool.query(
            'SELECT * FROM todo'
        )
        
        res.json(allTodos.rows)
        
    } catch (error) {
        console.log(error.message)
    }


})

// get a single todo

app.get("/todos/:id", async (req,res) => {

    try {
        
        // console.log(req.params)
        const { id } = req.params
        const singleTodo = await pool.query(
            'SELECT * FROM todo WHERE id = $1',
            [id]
        )
                
        res.json(singleTodo.rows)

    } catch (error) {
        console.log(error.message)
    }


})

// update a single todo

app.put("/todos/:id", async (req,res) => {

    try {
        
        // console.log(req.params)
        const { id } = req.params
        const { description } = req.body

        const updateTodo = await pool.query(
            'UPDATE todo SET description = $1 WHERE id = $2',
            [description, id]
        )

        res.json("Todo was updated!")
                
        
    } catch (error) {
        console.log(error.message)
    }


})

// delete a todo
app.delete("/todos/:id", async (req,res) => {

    try {

        const { id } = req.params
        const removeTodo = await pool.query(
            'DELETE FROM todo  WHERE id=$1',
            [id]
        )

        res.json('Todo was removed')
        
    } catch (error) {
        console.log(error.message)
    }


})

// SERVER LISTEN ---------------------------------------------------------
// start server listen 
app.listen(3000, '0.0.0.0',()=>{
    console.log('NodeJS server started on port 3000')
})
