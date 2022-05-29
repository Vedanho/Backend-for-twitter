const { Router } = require('express')

const { twitControllers } = require('../contollers/twit.controllers')

const router = Router()

router.post('/twit', twitControllers.addTwit);
router.delete('/twit/:id', twitControllers.deleteTwit);
router.get('/twit', twitControllers.getTwits);
router.patch('/twit', twitControllers.updateTwit);
router.patch('/twit/like/:id', twitControllers.addLike);

module.exports = router