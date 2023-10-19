import mongoose, { mongo } from "mongoose";

const ordersCollection = "orders";

const orderSchema = new mongoose.Schema({
        name:String,
        size:String,
        price:Number,
        quantity:Number,
        date:Date
});


export const orderModel = mongoose.model(ordersCollection,orderSchema);