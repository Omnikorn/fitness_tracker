const mongoose = require ("mongoose")

const Schema = mongoose.Schema

const WorkoutSchema = new Schema({
    day:{
        type:Date,
        default:()=> new Date() 
    },
    exercises:[
       {
           type:{
               type:String,
               required: "type of exercise required"
           },
        name:{
               type:String,
               required: "yes please "
           },
           duration:{
               type:Number,
               required:"yes please"
           },
           weight:{
               type:Number
           },
           reps:{
               type:Number
           },
           sets:{
               type:Number
           },
           distance:{
               type:Number
           }
       }
    ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout