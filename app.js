require("dotenv").config();
const express = require('express');
const cookieParser = require('cookie-parser');
const v1Route = require('./src/routes/index');
const connectDB = require('./src/db');
const errorMiddleware = require("./src/middlewares/error");
const { createUser } = require("./seeders/user");


// Create an Express server
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.get('/api/v1', (req, res) => {
    res.send('Hello, World!');
});

app.use('/api/v1', v1Route);

app.use(errorMiddleware);

app.listen(port, () => {
    connectDB()
    console.log(`Server running at http://localhost:${port}`);
});

// TODO: Validations
// TODO: File Upload
