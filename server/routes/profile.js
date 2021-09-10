const { Router } = require('express')
const router = Router()
const User = require('../models/user.js')

router.post('/', async (req, res) => {
    const { user } = req.body
    const candidate = new User({
        username: user.username,
        email: user.email,
        phoneNumber: user.phoneNumber,
        password: user.password
    })
    await candidate.save()

    res.status(200).json({ message: "Order was placed." }).redirect('/profile')
})

module.exports = router