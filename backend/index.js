const express = require("express");
// const socket = require('./socket');
const routes = require("./src/routes/api");

const app = express();
// porci queremos usar WebSockets
const server = require('http').Server(app);
// socket.connect(server);

const bodyParser = require('body-parser');

// permitir que la app reciba JSON's
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// estableciendo la api
app.use("/api",routes);

const PORT = "3000"; // TODO crear enviorment

server.listen(PORT, () => {
  console.log(`[db] Servidor corriendo en el puerto: ${PORT}`);
});
