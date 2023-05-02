const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./src/index.js']

const doc = {
    tags: [
        {
            "name": "Person",
            "description": "Endpoints"
        }
    ],
    definitions: {
        Person: {
            name: 'João da Silva',
            email: 'joao@gmail.com',
            phoneNumber: '47 987491294',
            dateOfBirth: Date.now()
        }
    }
}


swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    console.log('criando documentação');
    require('./src/index.js');
})