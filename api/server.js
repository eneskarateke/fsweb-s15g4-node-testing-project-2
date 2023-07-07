const express = require("express");
const server = express();
const authorRouter = require("../api/authors/author-router");

server.use(express.json());
server.use("/api/authors", authorRouter);

module.exports = server;
