const express = require ("express")
const mongoose = require ("mongoose")
const cors = require ("cors")
const employeeModel = require("./models/employee");

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/employee");

app.post("/Login" ,(req , res)=>{
    const {email , password} =  req.body ;
    employeeModel.findOne({email: email})
    .then(user =>{
        if (user){
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("Password is incorrect")
            }
        }else{
            res.json("No record ")
        }
    })
    
})

app.post("/LoginSignup" ,(req , res)=>{
    employeeModel.create(req.body)
    .then(employee => res.json(employee))
    .catch (err =>res.json(err))
})

app.listen(3001 , ()=>{
    console.log("server is running succesfully")
})