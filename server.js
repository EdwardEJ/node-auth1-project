const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const sessions = require('express-session');

const server = express();

const sessionConfiguration = {
  name: 'monster', //defaults to SID for the cookie name
  secret: process.env.SESSION_SECRET || 'keep it secret, keep it safe',
  cookie: {
    httpOnly: true, //true means JS cant access the cookie data
    maxAge: 1000 * 60 * 10,
    secure: process.env.SECURE_COOKIES || false, //send cookies over https only
  },
  resave: false, // re-save the session information even if there are no changes
  saveUninitialized: true, //read about GDPR compliance
  // store: new KnexSessionsStore({})
};

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(sessions(sessionConfiguration));

server.get('/', (req, res) => {
  res.status(200).json({ message: 'API running' });
});

module.exports = server;
