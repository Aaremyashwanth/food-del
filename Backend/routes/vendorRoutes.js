
const express=require("express");
const router=express.Router();
const vendorform =require( '../controllers/vendorController');

router.post('/register',vendorform.vendorRegister);
router.post('/login',vendorform.vendorlogin);

router.get('/all-vendors',vendorform.getAllVendors);
router.get('/single-vendor/:id',vendorform.getVendorById)

module.exports=router;