const express = require('express');
const UserBooksController = require('../controllers/UserBooksController');

const route = express.Router();

route.get('/:id', UserBooksController.findBooksForUserPk);

module.exports = route;