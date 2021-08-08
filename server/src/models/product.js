import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const productSchema = new Schema({
    products: []
});

export const Product = model('product', productSchema);
