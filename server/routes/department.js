const express = require('express')
const router = express.Router()
const departmentCont = require('../controller/department')
const middleware = require('../middleware/isAuth')

router.post('/create',middleware.adminAuth,departmentCont.createDepartment)
router.get('/all',middleware.adminAuth,departmentCont.getDepartments)
router.get('/user/all',departmentCont.getDepartments)

module.exports = router