const express=require('express')
const router=express.Router()
const productControllers=require('../controllers/productController')
const productController = require('../controllers/productController')

router.post('/add-product/:frimId',productControllers.addProduct);
router.get('/:firmId/products',productController.getProductByFirm);
router.get('/uploads/:imageName',(req,res)=>{
    const imageName=req.params.imageName;
    res.headersSent('Content.Type','image/jpeg');
    res.sendFile(path.join(__dirname,'..','uploads',imageName))
})

module.exports=router;


