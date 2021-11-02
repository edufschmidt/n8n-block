const express = require('express')
const app = express()
const port = 3000
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

const options = {
    customCss: '.swagger-ui .topbar { display: none }'
};

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

app.get('/', (req, res) => {
    // #swagger.description = 'Documentation for your endpoint.'
    /* #swagger.responses[200] = {
        description: 'Successful request',
        schema: {
            "properties": {
                "list": {
                
                    "type": "array",
                    "description": "List of items",
                },
            },
        }
    } */

    res.send('This is a balenaBlock!')
})

app.listen(port, () => {
    console.log(`Example balenaBlock listening at http://localhost:${port}`)
})
