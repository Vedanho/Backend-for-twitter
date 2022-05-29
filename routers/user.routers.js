const { Router } =require('express')

const { userControllers } = require('../contollers/user.controllers')

const router = Router()

router.post('/user', userControllers.addUser)
router.get('/user', userControllers.getUsers)
router.get('/user/:id',userControllers.getUserById)
router.delete('/user/:id',userControllers.deleteUser)
router.patch('/user/:id/twit',userControllers.addSavedTwit)

module.exports = router