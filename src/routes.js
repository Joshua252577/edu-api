const express = require('express');

const routes = express.Router();

const IndexController = require('./controllers/IndexController'); 
const CoursesController = require('./controllers/CoursesController');
const InstructorsController = require('./controllers/InstructorsController');
const LessonsController = require('./controllers/LessonsController');

routes.get('/', IndexController.index);

// Rotas de cursos
routes.post('/courses', CoursesController.create);
routes.patch('/courses/:id', CoursesController.update);

routes.get('/courses', CoursesController.find);
routes.get('/courses/:id', CoursesController.findById);


routes.post('/instructors', InstructorsController.create);
routes.patch('/instructors/:id', InstructorsController.update);

routes.post('/lessons', LessonsController.create);
routes.get('/lessons/:id', LessonsController.findById);

module.exports = routes;

// lessons
// courses
// instructors