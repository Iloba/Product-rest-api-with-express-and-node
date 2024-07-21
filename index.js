const express = require('express');
const app = express();
const mongoose = require('mongoose');
const databaseUrl = 'mongodb://localhost/freecodecamp';
const Product = require('./models/Product.model')
const router = require('./routes/api');
const errorHandler = require('./middleware/errorHandler');


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/v5', router);

//error handler middleware should be set after routes middleware
app.use(errorHandler);



mongoose.connect(databaseUrl, { useNewUrlParser: true });

const conn = mongoose.connection;

conn.on('open', () => {
    console.log('database connected successfully');
});



app.listen(3000, () => {
    console.log("server running");
})