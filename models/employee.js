const mongoose = require("mongoose")

const employeeSchema = new mongoose.Schema({
    name: {type:String ,
        required:true},
    email: {type:String ,
       required:true},
    password :{type:String ,
        required:true},
})

const employeeModel = mongoose.model("employee" , employeeSchema)
module.exports = employeeModel ;