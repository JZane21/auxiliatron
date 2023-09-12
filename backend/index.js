const express = require("express");
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./src/config/swagger');
const cors = require('cors');
const routes = require("./src/routes/routes");
require("dotenv").config();


// Creando el servidor
const app = express();

// Leer contenido json dentro del body
app.use(express.json());

app.use(cors());

//Creando la API
// app.use("/api", routes);
routes(app);

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = 3000; // TODO: crear enviroments

app.listen(PORT, () => {
  console.log("El servidor se ha levantado correctamente en el puerto ", PORT);
});
