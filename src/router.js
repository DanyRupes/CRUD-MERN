const express = require('express')
const app = express()
const mongo = require('../Database/mongo.js')
const path = require('path')
const bodyParser = require('body-parser')
const multer = require('multer')
const imgur = require('imgur');
const fs = require('fs')
imgur.setClientId('3bc90dfc9899ac6');

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
// app.use(express.static(path.join(__dirname, '../../')))
// app.use(express.static(path.join(__dirname, '../')))

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
  });

app.use(express.static(path.join(__dirname, '../uploads/images/')))



        var storage = multer.diskStorage({
            destination : (req,file,cb) => {
                cb(null, '../uploads/images')
            },
            filename : (req, file, cb) => {
                cb(null, file.originalname)
            }
        })

        var upload = multer({storage : storage})



    app.get('/letsgo',(req, res)=>{
        // console.log("Connecting Backend ")
        res.json({"process":1})
    })


 
    
    
    app.post('/submit',(req, res)=>{
        console.log(req)
        
        // console.log(req.body.file)
        
        // var path = req.files[0].path;
        // var imageName = req.files[0].originalname;
        // var imagepath = {};
        
        //     imagepath['path'] = path;
        //     imagepath['originalname'] = imageName;
        //     req.body.image = path;
        
        
        
        const { dateO,dates, start_time,start_times, end_time,end_times, title, price, category, status,img_file } = req.body
        mongo.Customer({dateO,dates, start_time,start_times, end_time,end_times, title, price, category, status,img_file}).save()
        .then((out)=>{
            // console.log(out)
            res.send("Success")})
            .catch((err)=>{console.log(err); throw new Error("Failed")})
        })
        
        
        //  for getting of bookings of an particular user!!!
        app.get('/get_list', (req, res)=>{
            console.log("received")
            mongo.Customer.find()
            .then((out)=>{res.send(out)})
            .catch((err)=>{err})
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
        const { dateO,dates, start_time,start_times, end_time,end_times,  title, price, category, status,img_file } = req.body
        mongo.Customer.findOneAndUpdate({_id:req.body.id},{$set:{
            "dateO":dateO,"dates":dates, start_time,start_times, end_time,end_times,  title, price, category, status, img_file
        }})
        .then((out)=>res.send(out))
        .catch((err)=>res.send(err))
    })

    
    
    // from front end file test upload
    app.post('/upload_image/test',upload.single('image'),(req, res)=>{
        console.log(req.file)
        
        imgur.uploadFile(req.file.path) //fs.readFileSync(req.file.path, {encoding:'base64'})
        .then(function (json) {
            console.log(json.data.link);
            fs.unlinkSync(req.file.path)
            res.json({"url":json.data.link})
        })
        .catch(function (err) {
            console.error(err.message);
           res.send(err)
        });
    })
    
    
    app.get('/oauthredirect', (req, res)=>{
        console.log(req.body)
        res.send("done")
    })
    
        app.get('/test_getimage',(req, res)=>{
           
            var kittenPic = 'desk';
            imgur.getInfo(kittenPic)
                .then(function(json) {
                    res.send(json)
                })
                .catch(function (err) {
                    console.error(err.message);
                    res.send(err)
                });
            
        })

    module.exports=app