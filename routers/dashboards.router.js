const router = require('express').Router()

const { viewDashboard } = require('../controllers/dashboards.controller')
// const restrict = require('../middlewares/restrict.middleware')
// restrict,
router.get('/dashboard', viewDashboard)

module.exports = router