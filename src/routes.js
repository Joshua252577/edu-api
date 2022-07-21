const express = require('express');

const routes = express.Router();

const IndexController = require('./controllers/IndexController'); 
const CoursesController = require('./controllers/CoursesController');
const InstructorsController = require('./controllers/InstructorsController');
const LessonsController = require('./controllers/LessonsController');

routes.get('/', IndexController.index);

// Rotas de cursos
routes.post('/courses', CoursesController.create);
routes.get('/courses', CoursesController.find);

routes.patch('/courses/:id', CoursesController.update);
routes.delete('/courses/:id', CoursesController.delete);
routes.get('/courses/:id', CoursesController.findById);


// Rotas de professores
routes.get('/instructors', InstructorsController.find);
routes.post('/instructors', InstructorsController.create);

routes.get('/instructors/:id', InstructorsController.findById);
routes.patch('/instructors/:id', InstructorsController.update);
routes.delete('/instructors/:id', InstructorsController.delete);

// Rotas de aulas
routes.post('/lessons', LessonsController.create);
routes.get('/lessons', LessonsController.find);
routes.get('/lessons/:id', LessonsController.findById);
routes.delete('/lessons/:id', LessonsController.delete);

module.exports = routes;

// lessons
// courses
// instructors