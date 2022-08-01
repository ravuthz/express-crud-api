const express = require("express");
const bodyParser = require("body-parser");
const models = require("./models");
const sequelizeRepository = require("./sequelizes/repository");
const sequelizeMoldels = require("./sequelizes/models");

// Initial Config
const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CRUD jokes with MongoDB database
app.use("/api/jokes", require("./crud")(models.Jokes)); // Mongo Model

// CRUD users with Sequelize database
app.use("/api/users", require("./sequelizes/crud")(sequelizeRepository(sequelizeMoldels)));

// https://sequelize.org/
// yarn add sequelize sqlite3

// Server
app.listen(port, () => console.log(`Listening on port ${port}`));
