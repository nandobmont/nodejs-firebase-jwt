const express = require("express");
const cors = require("cors");
const compression = require("compression");

const server = express();
const env = require("./config");
const middlewares = require("./middlewares");

server.use(express.json());
server.use(compression());
server.use(cors());

if (env.auth.ACTIVE) {
  server.use(middlewares.firebase);
}

server.listen(env.server.PORT);
