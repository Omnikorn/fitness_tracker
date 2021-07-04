const express = require ("express")
const logger = require ("morgan");
const mongoose = require ("mongoose")
const routes = require("./routes")


const PORT = process.env.PORT || 5000;
const db = require ("./models")


const app = express()

app.use(logger("dev"));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static(__dirname+"/public"))

mongoose.connect(process.env.MOGODB_URI || "mongodb://localhost/workout",{useNewUrlParser:true})

app.use(routes);




app.listen(PORT, ()=>{
    console.log (`app listening on port ${PORT}!`)
})