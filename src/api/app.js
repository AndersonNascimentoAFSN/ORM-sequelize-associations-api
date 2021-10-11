require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const routes = require('../routes');

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/employees', routes.EmployeeRouter);
app.use('/usersbooks', routes.UserBooksRoutes);

module.exports = app;