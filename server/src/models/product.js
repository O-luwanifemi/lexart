import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const productSchema = new Schema(
    {
        name: {
            type: String,
            trim: true
        },
        category: {
            type: String,
            trim: true,
            enum: ['mobile', 'refrigerator', 'television']
        },
        description: {
            type: String,
            trim: true
        },
        price: {
            type: String,
            trim: true
        },
        source: {
            type: String,
            trim: true,
            enum: ['mercadolivre.com.br', 'buscape.com.br']
        },
        imgurl: {
            type: String,
            trim: true
        }
    },
    { timestamps: true }
);

export const Product = model('product', productSchema);