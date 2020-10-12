const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const sessions = require('express-session');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
  res.status(200).json({ message: 'API running' });
});

module.exports = server;