const express = require('express')
const router = express.Router()
const productCont = require('../controller/product')
const middleware = require('../middleware/isAuth')
router.post('/create',middleware.adminAuth,productCont.createProduct)
router.get('/all',middleware.adminAuth,productCont.getProducts)
router.delete('/:productId',middleware.adminAuth,productCont.deleteProduct)
router.get('/:id',middleware.adminAuth,productCont.getProduct)
router.put('/:id',middleware.adminAuth,productCont.editProduct)

/** user */
router.get('/user/newAll',productCont.getNewProducts)
router.get('/user/:id',productCont.getProduct)

module.exports = router