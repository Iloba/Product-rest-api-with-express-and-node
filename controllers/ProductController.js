const Product = require('../models/Product.model');
const Joi = require('joi');
const createAProduct = async (req, res, next) => {

    const ProductSchema = Joi.object({
        'name': Joi.string().required(),
        'quantity': Joi.string().required(),
        'image': Joi.string().required(),

    });

    const {error, value} = ProductSchema.validate(req.body, {abortEarly: false});


    const product = await Product.create(value);
    res.status(200).json(product);

}

const getAllProducts = async (req, res, next) => {

    const products = await Product.find();
    res.status(200).json(products);


}

const showAProduct = async (req, res, next) => {
    const productId = req.params.id;

    const product = await Product.findById(productId);

    if (!product) {
        return res.status(404).json({ message: "Product does not exist" });
    }

    res.status(200).json(product);


}

const UpdateAProduct = async (req, res, next) => {
    const productId = req.params.id;


    const product = await Product.findByIdAndUpdate(productId, req.body);

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    const updatedProduct = await Product.findById(productId);

    res.status(200).json(updatedProduct);

}

const deleteAProduct = async (req, res, next) => {
    const productId = req.params.id;


    const product = await Product.findByIdAndDelete(productId);

    if (!product) {
        return res.status(404).json({ message: `Product with id ${productId} does not exist` });
    }

    res.status(200).json({ message: "Product Deleted sucessfully" });

}

const showHomePage = (req, res, next) => {
    res.send("Hello from node api");
}
module.exports = {
    createAProduct,
    getAllProducts,
    showAProduct,
    UpdateAProduct,
    deleteAProduct,
    showHomePage,
}