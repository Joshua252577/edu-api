const express = require('express');

const routes = express.Router();

const IndexController = require('./controllers/IndexController'); 
const CoursesController = require('./controllers/CoursesController');
const InstructorsController = require('./controllers/InstructorsController');
const LessonsController = require('./controllers/LessonsController');

routes.get('/', IndexController.index);

routes.post('/courses', CoursesController.create);
routes.patch('/courses/:Id', CoursesController.updade);

routes.get('/courses', CoursesController.find);
routes.get('/courses/:id', CoursesController.findById);

routes.post('/instructors', InstructorsController.create);


routes.post('/lessons', LessonsController.create);
routes.get('/lessons/:id', LessonsController.findById);

module.exports = routes;

// lessons
// courses
// instructors