const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const route = require("./route/route.js")
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

mongoose.connect("mongodb+srv://sweta1234:sweta5678@sweta2.rwx6dlh.mongodb.net/test",{
   useNewUrlParser :true
})
.then(()=>console.log("mongoDb is connected"))
.catch((err)=>console.log(err))

app.listen(process.env.PORT || 3000,function(){
   console.log("server is running on port"+ " "+ (process.env.PORT || 3000))
})
app.use("/",route)