const express = require("express");
const Sequelize = require("sequelize");
const bodyParser = require("body-parser");
const dbConfig = require("./config/config.json");
const app = express();
const PORT = 8000;
const userRouter = require("./router/users");
const profileRouter = require("./router/profile");
const homeRouter = require("./router/home");

const developmentConfig = dbConfig.development;
const { database, username, password, ...options } = developmentConfig;

const sequelize = new Sequelize(database, username, password, options);
sequelize
  .authenticate()
  .then(() => console.log("Conectado a la base de datos a través de Sequelize"))
  .catch((e) => console.log("error", e));

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(authMiddleware); // puedo lanzar un error directamente
app.use(profileRouter);
app.use(homeRouter);
app.use(userRouter);

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
