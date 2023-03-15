// Nos traemos a express
const express = require('express');
// Ejecutamos el metodo de express
const app = express();
// Nos traemos a la libreria de cors
//const cors = require("cors");
//Traemos las rutas modularizadas
const routerApi = require('./routes');
// Nos traemos el middleware de errores
const { logErrors, errorHandler, ormErrorHandler } = require('./middlewares/errorHandler');

// Añadimos el puerto por el que escuchara la app
const port = 3000;
// usamos middleware para recibir formato json en la app
app.use(express.json());
// hacemos uso de cors - Permisos por dominio
// const whitelist = ["http://localhost:8080","https://myapp.co"];
/*const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Acceso no permitido'));
    }
  },
};*/
//app.use(cors(options));

//iniciamos la app en la siguiente ruta
app.get('/', (request, response) => {
  response.send('Inicio del server en Express.');
});

routerApi(app);
// Middleware se usa despues del router de la aplicacion
app.use(logErrors);
app.use(ormErrorHandler);
app.use(errorHandler);

// Se le indica el puerto a la app
app.listen(port, () => {
  console.log('Mi puerto es: ' + port);
});
