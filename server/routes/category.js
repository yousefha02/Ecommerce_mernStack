const express = require('express')
const router = express.Router()
const categoryCont = require('../controller/category')
const middleware = require('../middleware/isAuth')

router.post('/create',middleware.adminAuth,categoryCont.createCategory)
router.get('/all',middleware.adminAuth,categoryCont.getCategories)

module.exports = router