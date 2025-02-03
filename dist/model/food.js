"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodModel = void 0;
const mongoose_1 = require("mongoose");
const FOOD_SCHEMA = new mongoose_1.Schema({
    name: String,
    price: Number,
    image: String,
    ingredients: String,
    category: mongoose_1.Schema.Types.ObjectId,
}, {
    timestamps: true,
});
const FoodModel = (0, mongoose_1.model)("Food", FOOD_SCHEMA);
exports.FoodModel = FoodModel;
