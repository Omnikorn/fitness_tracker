const mongoose = require("mongoose");

const Schema = mongoose.Schema 

const CardioSchema = new Schema ({
    name:{
        type:String,
        trim: true
    },
    duration:{
        type:Number
    },
    distance:{
        type:Number
    }
})


const Cardio = mongoose.model("Cardio", CardioSchema);

module.exports=Cardio 