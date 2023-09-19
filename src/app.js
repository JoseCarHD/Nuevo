const express = require('express'); //referencia a framework express
const app = express(); //se crea la aplicacion de express 
const log = require("morgan");  //para saber los clientes conectados 
const boddyParser = require('body-parser'); 
const path = require('path');

const indexRoutes = require('./routers/index.js');  //referencia a las rutas 
const {default: mongoose} = require('mongoose');
const datos = require('./models/datos.js');

app.set('port', process.env.PORT || 3000 ); //asigno puerto 3000

//Middleware utiliza morgan 
app.use(log('dev'));
app.use(boddyParser.urlencoded({extended: false}));
//Rutas
app.use('/', indexRoutes);

app.listen(app.get('port'),  () => {
    console.log('El servidor esta funcionando en el puerto ', app.get('port'));
}
);

mongoose.connect("mongodb+srv://carlos1duart:gkn7Zn4YZT24SnPJ@xsmile.rwmkvnp.mongodb.net/Xsmile?retryWrites=true&w=majority")
.then(bd=>console.log('BD conectado'))
.catch(err=>console.log(err));

//establecer sistema de vistas 
app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs')





// desplegar mensaje de conectado 