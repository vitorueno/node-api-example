const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

// import routes
const personRoute = require('./routes/person');

// routes
app.use('/person', personRoute);

const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger_output.json');
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerFile));


// database 
const mongoose = require('mongoose');
require('dotenv').config(); // database connection string, default port 

const connectToDatabase = async () => {
    try {
        const connection = await mongoose.connect(process.env.LOCAL_MONGO);
        app.listen(PORT);
        console.log(`servidor conectado e rodando em http://localhost:${PORT}`);
    } catch (err) {
        console.log(err);
        return err
    }
};

connectToDatabase();

module.exports = app;