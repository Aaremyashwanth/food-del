const product=require('../Model/Product');
const multer=require('multer');
const firm=require('../controllers/firmController')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/'); // Destination folder where the uploaded images will be stored
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Generating a unique filename
    }
});

const upload = multer({ storage: storage });

const addProduct=async(req,res)=>{
    try {
        const {productName,price,category,bestseller,description}=req.bestseller
        const image=req.file ? req.file.filename : undefind;

        const frimId= req.params.frimId;
        const firm= await Firm.findById(frimId);

        if(!frim){
            return res.status(404).json({error:"no firm error found"})
        }
        const product= new Product({
            productName,price,category,bestseller,description,image,firm:frim._id
        })
        const saveProduct= await product.save();
        frim.products.push(saveProduct);
        await frim.save()

        res.status(200).json(savedProduct)

    } catch (error) {
        console.error(error);
        res.status(500).json({error:"internal server error"})
    }
}
const getProductByFirm=async(req,res)=>{
    try {
        const frimId=req.params.frimId;
        const firm=await Frim.findById({firm : frimId})
        if (!firm) {
            return res.status(404).json({errpr:"no firm found"})
        }
        const restaurantName=firm.frimName
        const products=await Frim.findById({firm : frimId})
        res.status().json(restaurantName,products);
    } catch (error) {
        console.error(error);
        res.status(500).json({error:"internal server error"})  
    }
}
module.exports={addProduct:[upload.single('image'),addProduct],getProductByFirm};