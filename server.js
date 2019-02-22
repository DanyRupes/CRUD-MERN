const express = require('express')
const mongo = require('./Database/mongo.js')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '/src')))
// app.use(express.static(path.join(__dirname, '/public')))
// app.use(express.static(path.join(__dirname, '/src/Components')))

 app.get('/letsgo',(req, res)=>{
    console.log("Connecting Backend ")
    res.json({"process":"done"})
 })


 app.post('/submit',(req, res)=>{
    console.log(req.body)
    const { date, start_time, end_time, title, price, category, status } = req.body
        mongo.Customer({date, start_time, end_time, title, price, category, status}).save()
            .then((out)=>{
                console.log(out)
                res.send("Success")})
            .catch((err)=>{console.log(err); throw new Error("Failed")})
        })
        


app.listen(8000, ()=>console.log("Backend is running on http://localhost:8000"))