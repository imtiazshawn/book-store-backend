const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        cover: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
    },
    { timestamps: true }
);

module.exports = new mongoose.model('books', bookSchema);