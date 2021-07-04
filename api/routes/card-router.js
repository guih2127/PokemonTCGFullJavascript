const express = require('express')

const CardController = require('../controllers/card-controller')

const router = express.Router()

router.get('/cards', CardController.getCards)
router.post('/cards', CardController.createCard)

module.exports = router