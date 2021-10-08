const express = require('express');
const EmployeeController = require('../controllers/EmployeeController');

const route = express.Router();

route.get('/', EmployeeController.findAllEmployee);

module.exports = route;