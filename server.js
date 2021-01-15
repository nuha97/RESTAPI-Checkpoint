const mongoose = require("mongoose");
const express = require("express");
const User = require("./models/User");
const router = express.Router();

const app = express();

//enviroment variables
require('dotenv').config();

//database connection
//const uri = `mongodb://${process.env.DB_HOST}:${process.env.PORT}/${process.env.DB_NAME}`
const uri = "mongodb://localhost:27017/users";

console.log(uri);
mongoose.connect(uri,{
    useNewUrlParser : true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("Database connection Succefull");
})
.catch(err=>{
    console.log(err);
})

app.use("/", router);
router.route("/insertdata").post(function(req, res) {

//data need to insert
let data = [
    {
      name: "user1",
      age: 21,
      email: "user1@test.com",
      password:"123456",
      phone:"123456789"
    },
    {
      name: "user2",
      age: 27,
      email: "user2@test.com",
      password:"123454",
      phone:"254644644"
    },
    {
      name: "user3",
      age: 23,
      email: "user3@test.com",
      password:"123456",
      phone:"156464544"
    }
  ];

  User.insertMany(data, function(err, result) {
    if (err) {
        res.send(err);
    } else {
    res.send(result);
    }
    });

});
    // fetch data 
    router.route("/fetchdata").get(function(req, res) {
        User.find({}, function(err, result) {
          if (err) {
            res.send(err);
          } else {
            res.send(result);
          }
        });
      });

      // Edit data 
    router.route("/updatedata").put(function(req, res) {
        User.findOneAndUpdate({"_id": "6000c6521b448db6f0a6f9bc"},{name:"updated2 user3"},{new:true}, function(err, result) {
          if (err) {
            res.send(err);
          } else {
            res.send(result);
          }
        });
      });

      // Edit data 
    router.route("/deletedata").delete(function(req, res) {
        User.remove({"_id": "6000c6521b448db6f0a6f9bc"}, function(err, result) {
          if (err) {
            res.send(err);
          } else {
            res.send(result);
          }
        });
      });
app.listen(3000,(req,res)=>{
    console.log("server is started on port 3000");
})



