const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Product name is required"]
    },
    quantity: {
        type: Number,
        required: [true, "Product Quantity is required"],
        default: 0
    }, 
    price: {
        type: Number,
        required: [true, "Product price must is required"],
        default: 0
    },
    image: {
        type: String,
        required: [true, "Product image is required"]
    },
    
}, {timestamps: true});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;