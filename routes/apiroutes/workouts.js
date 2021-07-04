const express = require ("express")
const router = require("express").Router();
const mongoose = require ("mongoose")
const db = require ("../../models/index")


router.get("/", (req,res) =>{
    db.Workout.aggregate([{
        $addFields:{
            totalDuration:{$sum:"$exercises.duration",},
            
        },
    },])
    .then(dbworkout=>{
        res.json(dbworkout)
    })
    .catch((err) => {
        res.status(400).json(err)
    });
});

router.post("/", (req,res)=>{
    db.Workout.create({})
    .then(dbworkout =>{
        res.json(dbworkout)
    }) .catch(err => {
        res.status(400).json(err)
    })
    })
// add exercise to a work out 
router.put("/:id",(req,res)=>{
    db.Workout.findByIdAndUpdate(
        req.params.id, { $push: {exercises: req.body}}
    ).then(dbworkout=>{
        res.json(dbworkout);
    }).catch(err =>{
        res.status(400).json(err)
    })
})


//find exercises in rang 
router.get("/range", (req,res) =>{
    db.Workout.aggregate([{
        $addFields:{
            totalDuration:{$sum:"$exercises.duration",},
            
        },
    },])
    .sort({_id:-1})
    .limit(7)
    .then(dbworkout=>{
        res.json(dbworkout)
    })
    .catch((err) => {
        res.status(400).json(err)
    });
});


module.exports=router