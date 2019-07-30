const documentation = require('fastify-swagger');

// Import our Controllers
const carController = require('../controllers/carController')

const routes = [
    {
        method: 'GET',
        url: '/api/cars',
        handler: carController.getCars
    },
    {
        method: 'GET',
        url: '/api/cars/:id',
        handler: carController.getSingleCar,
        schema: {
            params: {
                type: 'object',
                properties: {
                    id: {
                        type: 'string',
                        description: 'Car id'
                    }
                }
            },
            response: {
                200: {
                    description: 'Successful response',
                    type: 'object',
                    properties: {
                        _id: { type: 'string' },
                        title: { type: 'string' },
                        price: { type: 'string' },
                        age: { type: 'number' },
                        services: {
                            type: 'object',
                            properties: {
                                ['BMW India']: { type: 'string' }
                            }
                        }
                    }
                }
            }
        }
    },
    {
        method: 'POST',
        url: '/api/cars',
        handler: carController.addCar,
        schema: documentation.addCarSchema
    },
    {
        method: 'PUT',
        url: '/api/cars/:id',
        handler: carController.updateCar
    },
    {
        method: 'DELETE',
        url: '/api/cars/:id',
        handler: carController.deleteCar
    }
]

module.exports = routes
