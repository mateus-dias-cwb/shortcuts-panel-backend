const { Router } = require('express')
const ListController = require('./controllers/ListController')

const routes = Router()

// Métodos HTTP: GET, POST, PUT, DELETE

// Query Params: request.query (Filtros, ordenação, paginação, ...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

// app.put('/user/:id', (request, response) => {

routes.get('/lists', ListController.index)
routes.post('/lists', ListController.store)
routes.put('/lists', ListController.update)
routes.delete('/lists', ListController.destroy)

module.exports = routes