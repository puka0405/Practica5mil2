import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import { test } from "./backend/controllers/jugadores.controller.js";

dotenv.config();
mongoose.connect(process.env.urldb)
.then(()=> {
    console.log("Hola")
})
.catch((error)=>{
    console.log("No", error)
});

const app=express();
app.use(cors());
app.listen(4000, ()=>{
    console.log("Algo")
});

test()