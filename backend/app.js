require('dotenv').config()

//imports de librerias

const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const morgan = require('morgan');

//imports de archivos propios

const conectarDB = require('./db/index');
const routes = require('./routes');
const localStrategy = require("./passport/local");
const jwtStrategy = require("./passport/jwt");

//connect to DB
conectarDB();

//setup de passport
passport.use('local', localStrategy);
passport.use('jwt', jwtStrategy);

//setup Express Application
const app = express();
app.use(morgan("combined"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(passport.initialize())
app.use("/api", routes);

//inicializando aplicacion
const port = process.env.PORT || 8080;

app.listen(port, () => console.log("App Started on Port" + port ));