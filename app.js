import express from "express";
import bodyParser from "body-parser";
import { connectDb } from "./config/db.js";
import apiRoutes from './router/index.js';

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.listen(3000, async () => {
    console.log("Server Started at " + 3000);
    console.log("Connecting to MongoDB...");
    connectDb();
});

app.use("/api", apiRoutes);

app.get("/", (req, res)=>{
    res.send("<h1>Namaste From Server 🙏</h1>");
})