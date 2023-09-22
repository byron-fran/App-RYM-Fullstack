const {Router} = require("express");
const login = require("../controllers/login");
const getCharById = require("../controllers/getCharById");
const  getFavorites = require('../controllers/getFavorites')

const postFav= require('../controllers/postFav')
const deleteFav  = require('../controllers/deleteFav')
const  createUser = require('../controllers/createUser');

const mainRouter = Router();

mainRouter.get("/character/:id", getCharById);
mainRouter.get("/login", login);

mainRouter.post("/fav", postFav);
mainRouter.delete("/fav/:id", deleteFav);
mainRouter.get('/favorites', getFavorites)
// users
mainRouter.post("/create", createUser)
module.exports = mainRouter;
