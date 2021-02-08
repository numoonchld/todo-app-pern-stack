// load express 
const express = require('express')

// init express app 
const app = express()

// load cors 
const cors = require('cors')

// middleware
// use cors in app 
app.use(cors())
app.use(express.json()) // get only body of request from client side  

// start server listen 
app.listen(5000, '0.0.0.0',()=>{
    console.log('NodeJS server started on port 3000')
})
