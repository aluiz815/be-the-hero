const { Router } = require('express')
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')
const route = new Router()


// Ong Routes //
route.get('/ongs',OngController.index)
route.post('/ongs',OngController.store)

// Incident Routes //
route.get('/incidents',IncidentController.index)
route.post('/incidents',IncidentController.store)
route.delete('/incidents/:id',IncidentController.delete)

// Profile Routes //
route.get('/profile',ProfileController.index)

// Session Routes //
route.post('/session',SessionController.store)

module.exports = route