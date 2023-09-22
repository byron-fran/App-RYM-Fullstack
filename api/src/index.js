// EXPRESS
const express = require("express");
const mainRouter = require("./routes/mainRouter");
const server = express();
const morgan = require("morgan");
const  sequelize  = require('../db/db');
//  const Favorites = require('../models/Favorites');
//  const Users = require('../models/User');

const PORT = 3001;
//conexion a base de datos
server.listen(PORT, async () => {
    try{

        console.log(`escuhando el puerto ${PORT}`);
        console.log('Conexion a la base de datos');
        
        await sequelize.authenticate();
        await sequelize.sync({force : false})
    }
    catch(error){ console.log(error) }

});

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use(express.json());
server.use(express.urlencoded({extended : true}))
server.use(morgan("dev"));

server.use("/rickandmorty", mainRouter);

