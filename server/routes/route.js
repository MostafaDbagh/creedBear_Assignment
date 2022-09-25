const routes = require('express').Router();
const UserController = require('../controllers/userController')


routes.get('/getUsers',UserController.getUsers)
routes.get('/getCurrentUser/:id',UserController.getCurrentUser)
routes.post('/createUser',UserController.createUser)
routes.post('/verification',UserController.authenticateUser)
routes.delete('/deleteUser/:id',UserController.deleteUser)
routes.put('/updateUser/:id',UserController.updateUser)


module.exports = routes;