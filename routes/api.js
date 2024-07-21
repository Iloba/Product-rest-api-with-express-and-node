const express = require('express');
const Product = require('../models/Product.model')
const {createAProduct, getAllProducts, UpdateAProduct, showAProduct, deleteAProduct, showHomePage} = require('../controllers/ProductController');
const tryCatch = require('../helpers/tryCatch')

const router = express.Router();

router.get('/', showHomePage);

// Create Product
router.post('/products', tryCatch(createAProduct));

//get all products
router.get('/products', tryCatch(getAllProducts));

//get specific product
router.get('/product/:id', tryCatch(showAProduct));

//update a specific product
router.patch('/product/:id', tryCatch(UpdateAProduct));

//delete a specific product
router.delete('/product/:id', tryCatch(deleteAProduct));

module.exports = router;