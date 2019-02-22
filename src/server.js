const express = require('express')
const app = express()

// const path = require('path')
const router = require('./router.js')
app.use('/',router)

app.listen(8000, ()=>console.log("Backend is running on http://localhost:8000"))