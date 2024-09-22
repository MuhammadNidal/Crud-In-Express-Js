const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());


let books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' }
];

// GET: Retrieve all books
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Books retrieved successfully',
        data: books
    });
});

// GET: Retrieve a book by id

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
