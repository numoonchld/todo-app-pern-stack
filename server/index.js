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

        console.log(req.body)
        const { description } = req.body // client-side received payload
        const addTodo = await pool.query(
            "INSERT INTO todo (description) VALUES($1)", 
            [description]
            )

    } catch (error) {
        console.log(error.message)
    }



})

// get all todos

app.get("/todos", async (req,res) => {

    try {
        
    } catch (error) {
        console.log(error.message)
    }


})

// update a todo

app.put("/todos/:id", async (req,res) => {

    try {
        
        
    } catch (error) {
        console.log(error.message)
    }


})

// delete a todo
app.delete("/todos/:id", async (req,res) => {

    try {
        
    } catch (error) {
        console.log(error.message)
    }


})

// SERVER LISTEN ---------------------------------------------------------
// start server listen 
app.listen(3000, '0.0.0.0',()=>{
    console.log('NodeJS server started on port 3000')
})
