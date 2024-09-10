import express from "express";
import dotenv from "dotenv"
import path from "path"
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js"

const app = express()

app.use(express.json()) // middleware that allows us to accept the JSON data in the req.body

app.use("/api/products", productRoutes);

dotenv.config()
const PORT = process.env.PORT || 5003

const __dirname = path.resolve();

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"/frontend/dist")));

    app.get("*", (req,res) =>{
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });
}

app.listen(PORT,()=>{
    
    connectDB();
    console.log(`Server is listening on ${PORT}`)
})


