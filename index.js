require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const BooksRoute = require('./Routes/BooksRoutes');

// Configuration
const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/books/', BooksRoute);

// Database Connect
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Database is connected!'))
    .catch((error) => console.log(error));

// App is Listening
const PORT = process.env.PORT || 4001;
app.listen(PORT, (req, res) => {
    console.log(`server is running at ${PORT}`)
})