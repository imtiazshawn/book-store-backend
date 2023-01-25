const express = require('express');
const router = express.Router();
const { 
        getBooks, 
        getBook, 
        addBook, 
        deleteBook, 
        updateBook } 
    = require('../Controllers/BooksControllers');

// GET
router.get('/', getBooks);
router.get('/:id', getBook);

// POST
router.post('/', addBook);

// DELETE
router.delete('/:id', deleteBook);

// UPDATE
router.patch('/:id', updateBook);


module.exports = router;