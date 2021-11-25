const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const express = require("express");
const cors = require("cors");
const knex = require("./db/connection");

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");

const app = express();

// Server essentials
app.set("db", knex);
app.use(cors());
app.use(express.json());

// Routes

// Errors
app.use(notFound);
app.use(errorHandler);

module.exports = app;