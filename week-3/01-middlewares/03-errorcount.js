const request = require('supertest');
const assert = require('assert');
const express = require('express');

const app = express();
let errorCount = 0;

// You have been given an express server which has a few endpoints.
// Your task is to
// 1. Ensure that if there is ever an exception, the end user sees a status code of 404
// 2. Maintain the errorCount variable whose value should go up every time there is an exception in any endpoint

app.get('/user', errorCountfn, function (req, res) {
  throw new Error('User not found');
});
function errorCountfn(err, req, res, next) {
  if (err) {
    errorCount++;
    res.status(404);
    return;
  } else {
    next();
  }
}

app.post('/user', errorCountfn, function (req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/errorCount', function (req, res) {
  res.status(200).json({ errorCount });
});
app.use(errorCountfn);

module.exports = app;
