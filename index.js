const express = require('express');
const helmet = require("helmet");
const bodyParser = require('body-parser')
const cors = require('cors')
const routerApi = require('./routes')

//Initialize the app
const app = express();
const port = 3080;
app.use(helmet());

const whitelist = [
  'https://notaclinica.com/',
  'https://darudaniel.github.io/nota-clinica/',
  'http://localhost:3000/',
]
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Dominio no permitido'));
    }
  }
}
app.use(bodyParser.json());
app.use(cors())


routerApi(app)

//Listener
app.listen(port, () => {
  console.log(`Servidor de desarrollo desplegado en el puerto ${port}`);
});
