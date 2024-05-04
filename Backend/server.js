let express=require("express")
let mongoose=require("mongoose")
let dotenv=require("dotenv")
let bodyparser=require("body-parser")
const path=require('path')
let vendorRoutes=require("./routes/vendorRoutes")
const firmRoutes=require("./routes/firmRoutes")
const producrRoutes=require('./routes/productRoutes')

dotenv.config()
let app=express()
let port=5000
app.use(bodyparser.json())

app.get("/home",(req,res)=>{
    res.send("this is home page")
})


app.use('/vendor',vendorRoutes)
app.use('/firm',firmRoutes)
app.use('/product',producrRoutes)
app.use('/uploads',express.static('uploads'));

mongoose.connect(process.env.Mongo_uri)
.then(console.log("DBconnected"))
.catch((error)=>{console.log(`${error}`)})

app.listen(port,() =>{
    console.log("server connected");
})