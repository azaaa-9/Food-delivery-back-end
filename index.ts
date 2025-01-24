import express, { Request, Response } from "express";
import { config, configDotenv } from "dotenv";
import { foodCategoryRouter } from "./router/food-category";
import { FoodRouter } from "./router/food";
import { UserOrdersRouter } from "./router/users-order";
const cors = require('cors');
 
const PORT = 5000;
const app = express();
const mongoose = require('mongoose');
app.use(cors());
app.use(express.json());
 
configDotenv();
 
 
const connectMongoDB = async () => {
    const URI = process.env.MONGODB_URL;
    await mongoose.connect(URI);
}
connectMongoDB();
 
app.use("/food-category/", foodCategoryRouter);
app.use('/food/', FoodRouter);
// app.use('/order/', UserOrdersRouter);
app.use('/users/', UserOrdersRouter);
 
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
 