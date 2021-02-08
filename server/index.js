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

})

// get all todos

app.get("/todos", async (req,res) => {

})

// update a todo

app.put("/todos/:id", async (req,res) => {

})

// delete a todo
app.delete("/todos/:id", async (req,res) => {

})

// SERVER LISTEN ---------------------------------------------------------
// start server listen 
app.listen(5000, '0.0.0.0',()=>{
    console.log('NodeJS server started on port 3000')
})
