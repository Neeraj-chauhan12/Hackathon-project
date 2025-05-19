const express=require('express')
const app=express();
const connectdb = require('./connection/databaseConnect')
const path= require('path')
const cors = require('cors')
const userrouter =require('./routes/userroutes')




//dotenv connect
const dotenv=require('dotenv')
dotenv.config();

//middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}))
app.use(cors())

//routers
app.use('/user',userrouter);



//data base connection
const PORT=process.env.PORT
connectdb()

app.listen(PORT,()=>{
    console.log(`app is running ${PORT}`)
})