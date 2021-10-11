const express = require('express');
const EmployeeController = require('../controllers/EmployeeController');

const route = express.Router();

route.get('/', EmployeeController.findAllEmployee);
route.get('/:id', EmployeeController.findEmployeeByPk);
route.post('/', EmployeeController.createEmployee);

module.exports = route;