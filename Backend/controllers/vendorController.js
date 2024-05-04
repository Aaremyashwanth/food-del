const Vendor=require("../Model/Vendor")
const jwt=require("jsonwebtoken")
const bcrypt=require('bcryptjs')
const dotenv=require("dotenv")
const{json}=require('body-parser')
dotenv.config()
const secret=process.env.WhatisyourName

const vendorRegister=async(req,res)=>{
    
    try {
        const{username,email,password}=req.body
        const vendorEmail=await Vendor.findOne({email})
        if(vendorEmail){
            return res.status(400).json("Email alredy taken")
        }
        const hashedpassword=await bcrypt.hash(password,10)
        const newVendor= new Vendor({
            username,
            email,
            password:hashedpassword
        })
        await newVendor.save();
        res.status(201).json({message:"vendor register successfully"});
        console.log("registered");

    } catch (error) {
      console.error(error);
      res.status(500).json({message:"internal server error"})  
    }
}

const vendorlogin=async(req,res)=>{
    try {
        const{email,password}=req.body
        const vendor=await Vendor.findOne({email})
        if (!vendor||!(await bcrypt.compare(password,vendor.password))) {
            return res.status(404).json({error:"invalid details"})
        } 
        const token=jwt.sign({vendorid:vendor._id},secret,{expiresIn:"1h"})
        res.status(201).json({message:"login successfull",token})
        console.log(email,"this is token",token);
    } catch (error) {
        console.log(error);
        res.st(500).json({error:"internal server error"})
    }
    
}

const getAllVendors=async(req,res)=>{
    try {
        const vendor=await Vendor.find().populate('firm');
        res.json({vendors})
    } catch (error) {
        console.log(error);
        res.st(500).json({error:"internal server error"})
    }
}
const getVendorById=async(req,res)=>{
    const vendorId=req.params.id;
    try {
        const vendor=awaitVendor.findOne(vendorId);
        if(!vendor){
            return res.status(404).json({error:"vendor not found"});
        }
    } catch (error) {
       console.log(error);
       res.status(500).json({error:"internal server error"}) 
    }
}

module.exports={vendorRegister,vendorlogin,getAllVendors,getVendorById}