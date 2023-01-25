const bookSchema = require('../Models/BooksModel');
const mongoose = require('mongoose');

// Get All books
const getBooks = async (req, res) => {
    const books = await bookSchema.find({}).sort({ createdAt: -1 });
    res.status(200).json(books);
};


// Get a single books
const getBook = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ message: "No such book found!"});
    }

    const book = await bookSchema.findById(id);

    if (!book) {
        res.status(404).json({ message: "No such book found!"});
    }
    
    res.status(200).json(book);
};

// Add A book info
const addBook = async (req, res) => {
    const {title, description, author, cover, price} = req.body;

    try {      
        const books = await bookSchema.create({
            title, description, author, cover, price
        });
        res.status(200).json(books);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a Book
const deleteBook = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: "No such Book!"});
    };

    const book = await bookSchema.findByIdAndDelete({_id: id});

    res.status(200).json(book);
};

// Update a Book
const updateBook = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: "No such Book!"});
    };

    const book = await bookSchema.findByIdAndUpdate({_id: id}, {
        ...req.body
    });

    res.status(200).json(book);
}


module.exports = {
    getBooks,
    getBook,
    addBook,
    deleteBook,
    updateBook
};