import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./route/product.route.js";

dotenv.config();

const app = express();

app.use(express.json()); //allow us to accept json data in req.body

app.use("/api/products", productRoutes);

console.log(process.env.MONGO_URI);

app.listen(5000, () => {
  connectDB();
  console.log("Server is started at http://localhost:5000");
});
