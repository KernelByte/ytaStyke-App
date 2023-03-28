// Nos traemos a express
const express = require('express');
// Nos traemos a la libreria de cors
const cors = require("cors");
//Traemos las rutas modularizadas
const routerApi = require('./routes');
// Nos traemos la funcion de autentificacion
const { checkApiKey } = require("./middlewares/authHandler");
// Nos traemos el middleware de errores
const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/errorHandler');

// Ejecutamos el metodo de express
const app = express();
// Añadimos el puerto por el que escuchara la app
const port = process.env.PORT || 3000;

// usamos middleware para recibir formato json en la app
app.use(express.json());

// hacemos uso de cors - Permisos por dominio
const whitelist = ['http://localhost:3000'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
}
app.use(cors(options));

require('./utils/auth');

//iniciamos la app en la siguiente ruta
app.get('/', (request, response) => {
  response.send('Inicio del server en Express.');
});

routerApi(app);

// Middleware se usa despues del router de la aplicacion
app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);


// Se le indica el puerto a la app
app.listen(port, () => {
  console.log('Mi puerto es: ' + port);
});
