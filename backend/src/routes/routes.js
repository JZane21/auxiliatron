const express = require('express');

const API = "/api";
const user = require('./userRoute');
const subject = require('./subjectRoute');

const routes = (server) => {
  server.use(API,user);
  server.use(API,subject);
};

module.exports = routes;