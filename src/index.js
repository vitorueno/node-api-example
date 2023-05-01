const express = require('express');
const app = express();
app.use(express.json());

// import routes
const personRoute = require('./routes/person');

// routes
app.get('/', (req, res) => {
    res.send('hello, world');
});

app.use('/person', personRoute);

// database 
const mongoose = require('mongoose');
require('dotenv').config(); // database connection string, default port 

const connectToDatabase = async () => {
    try {
        const connection = await mongoose.connect(process.env.LOCAL_MONGO);
        app.listen(process.env.PORT || 3000);
        console.log('conectado');
    } catch (err) {
        return err
    }
};

connectToDatabase();

module.exports = app;