"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.foodCategoryRouter = void 0;
const express_1 = require("express");
const food_category_1 = require("../model/food-category");
exports.foodCategoryRouter = (0, express_1.Router)();
exports.foodCategoryRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const items = yield food_category_1.foodCategoryModel.find();
    res.json(items);
}));
exports.foodCategoryRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newItem = yield food_category_1.foodCategoryModel.create({
        categoryName: req.body.categoryName
    });
    res.json({
        message: "New category added",
        newItem,
    });
}));
exports.foodCategoryRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const item = yield food_category_1.foodCategoryModel.findById(id);
    res.json(item);
}));
exports.foodCategoryRouter.put(":id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedItem = yield food_category_1.foodCategoryModel.findByIdAndUpdate(req.params.id, { categoryName: req.body.categoryName }, { new: true });
    res.json(updatedItem);
}));
exports.foodCategoryRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedItem = yield food_category_1.foodCategoryModel.findByIdAndDelete(req.params.id);
    res.json(deletedItem);
}));
