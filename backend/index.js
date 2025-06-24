const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

app.get("/", (req, res) => {
    res.status(200).json({ message: "This is home page" })
})

const app = express();
app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 4500

app.listen(4500, async () => {
    try {
        await connection
        console.log("Connected to Database");

        console.log(`Server is running at ${PORT}`);
    } catch (error) {
        console.log(error.message);
    }
})