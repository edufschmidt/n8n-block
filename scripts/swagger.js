const swaggerAutogen = require('swagger-autogen')()

const outputFile = 'swagger.json'
const endpointsFiles = ['lib/index.js']

const fs = require("fs");

let version, doc;
try {
    version = fs.readFileSync('VERSION', 'utf8') || "0.0.1";
}
catch (error) {
    version = '0.0.1';
}
finally {
    doc = {
        info: {
            version: version,
            title: "My balenaBlock",
            description: "Documentation automatically generated for your express-based balenaBlock.",
            license: {
                name: "Apache 2.0",
                url: "http://www.apache.org/licenses/LICENSE-2.0.html"
            }
        }
    }
}


swaggerAutogen(outputFile, endpointsFiles, doc)