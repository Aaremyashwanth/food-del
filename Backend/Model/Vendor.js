let mongoose=require("mongoose")
let mongodb=require("mongodb")
const Firm = require("./Firm")

const vendorschema=new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    firm: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Firm'
    }]
})

const Vendor=mongoose.model("Vendor",vendorschema)
module.exports=Vendor