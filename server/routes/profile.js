const { Router } = require('express')
const router = Router()
const User = require('../models/user.js')

router.post('/', async (req, res) => {
    try {
        const { user } = req.body
        const candidate = new User({
            username: user.username,
            email: user.email,
            phoneNumber: user.phoneNumber,
            password: user.password
        })
        await candidate.save()

        res.json({ message: "User was added." })
    } catch (e) {
        console.log(e);
        res.status(400).json({ message: "SignUp error" })
    }
})

module.exports = router