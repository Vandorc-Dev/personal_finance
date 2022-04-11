const express = require('express');

module.exports = function(server){
//Rotas
const router = express.Router()
server.use('/api', router)
//Api
const billingCycleService = require('../api/billingCycle/billingCycleService');
billingCycleService.register(router, '/billingCycles')

}