const express = require('express');
const dotenv = require('dotenv').config();
const helmet = require("helmet");
const bodyParser = require('body-parser')
const cors = require('cors')
const routerApi = require('./routes')

//Initialize the app
const app = express();
const port = process.env.PORT || 3000;
app.use(helmet());

// const whitelist = [
//   'https://notaclinica.com',
//   'https://darudaniel.github.io',
//   'http://localhost:3000/',
// ]
// const options = {
//   origin: (origin, callback) => {
//     if (whitelist.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error('Dominio no permitido'));
//     }
//   }
// }
app.use(bodyParser.json());
// app.use(cors(options))
// Definir una lista blanca de dominios permitidos
const whitelist = ['https://darudaniel.github.io'];

// Opciones de configuración de cors
const corsOptions = {
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

// Habilitar cors con las opciones de configuración
app.use(cors(corsOptions));


routerApi(app)

//Listener
app.listen(port, () => {
  console.log(`Servidor de desarrollo desplegado en el puerto ${port}`);
});
