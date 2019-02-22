const express = require('express')
const mongo = require('../Database/mongo.js')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '/src')))
// app.use(express.static(path.join(__dirname, '/public')))
// app.use(express.static(path.join(__dirname, '/src/Components')))


    // app.get('/',(req, res)=>{
    //     console.log("Connecting Backend ")
    //     res.json({"process":"done"})
    // })


    app.post('/submit',(req, res)=>{
        console.log(req.body)
        const { date, start_time, end_time, title, price, category, status } = req.body
            mongo.Customer({date, start_time, end_time, title, price, category, status}).save()
                .then((out)=>{
                    console.log(out)
                    res.send("Success")})
                .catch((err)=>{console.log(err); throw new Error("Failed")})
        })
      
        
        //  for getting of bookings of an particular user!!!
    app.post('/get_list', (req, res)=>{
        console.log(req.body)
        mongo.Customer.find()
        .then((out)=>res.send(out))
        .catch((err)=>err)
    })  
    
    // for editing a particular booking
    app.post('/edit_this', (req, res)=>{
        console.log(req.body)
        mongo.Customer.findOne({_id:req.body.id})
        .then((out)=>res.send(out))
        .catch((err)=>res.send(err))
    })


    // for updating a edited booking over already stored
    app.post('/update_this',(req, res)=>{
        console.log(req.body)
        const { date, start_time, end_time, title, price, category, status } = req.body
        mongo.Customer.findOneAndUpdate({_id:req.body.id},{$set:{
            date, start_time, end_time, title, price, category, status
        }})
        .then((out)=>res.send(out))
        .catch((err)=>res.send(err))
    })

module.exports=app