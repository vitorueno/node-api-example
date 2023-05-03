const express = require('express');
const app = express();

// middlewares
const cors = require('cors');
app.use(express.json());
app.use(cors());

// import routes
const personRoute = require('./routes/person');

// routes
app.use('/person', personRoute);

// documentation route
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger_output.json');
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerFile));


// database connection
const mongoose = require('mongoose');

// configuration file with database connection string, port... (not in repo) 
require('dotenv').config();

// default option if not using the .env file
const DEFAULT_PORT = 3000; // default port
const DEFAULT_CONNECTION_STRING = ''; // write your connection string here

const connectToDatabase = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_CONNECTION_STRING || DEFAULT_CONNECTION_STRING);
        app.listen(process.env.PORT || DEFAULT_PORT);
        console.log(`servidor conectado e rodando em http://localhost:${DEFAULT_PORT}`);
    } catch (err) {
        console.log('Falha ao conectar ao banco.');
        console.log('Mensagem de erro: ', err);
    }
};

connectToDatabase();

module.exports = app;