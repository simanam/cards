const mongoose = require('mongoose');
var ItemSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Name is required."], minlength: [3, "Name must be at least 3 characters."]},
    quan: {type: Number, required: [true, "Quantity is required."], min: [0, "Quantity must be a number greater than or equal to 0."]},
    price: {type: Number, required: [true, "Price is required."], min: [0, "Price must be a number greater than or equal to 0."]},
}, {timestamps: true})

mongoose.model('Item', ItemSchema)