const router = require ("express").Router();
const workoutrouts = require ("./workouts")



router.use("/workouts",workoutrouts);


module.exports = router