const express = require('express')
// const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth.middleware')
const {log} = require('../../middlewares/logger.middleware')
const {addOrder, getOrders} = require('./order.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/orders', getOrders)
router.post('/order',addOrder)
// router.delete('/:id',  requireAuth, deleteReview)

module.exports = router