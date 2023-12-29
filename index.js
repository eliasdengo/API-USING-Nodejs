const express=require("express")
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const routes=require("./routes/routes")

dotenv.config();

const mongoString=process.env.DATABASE_URL
mongoose.connect(mongoString);

const database=mongoose.connection;

database.on("error",(error)=>{
    console.log(error);
});

database.once("connected",()=>{
    console.log("database connected successfully");
})

const app=express();

app.use("/api",routes)
app.use(express.json)

app.listen(3000,()=>{
    console.log(`server started at ${3000}`);
})