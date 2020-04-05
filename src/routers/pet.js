const express = require('express')
const Pet = require('../models/pet')
const auth = require('../middleware/auth')
const router = new express.Router()

router.post('/pets', auth, async (req, res) => {
    const pet = new Pet({
        ...req.body,
        owner: req.user._id
    })
    try {
        await pet.save()
        res.status(201).send(pet)
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router