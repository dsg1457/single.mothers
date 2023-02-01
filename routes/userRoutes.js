const express = require('express')
const router = expredss.Router()
const usersController = require('../controllers/usersController')

router.route('/')
.get(usersController.getAllUsers)
.post(usersController.createNewUser)
.update(usersController.updateUser)
.delete(usersController.deleteUser)

module.exports = router
