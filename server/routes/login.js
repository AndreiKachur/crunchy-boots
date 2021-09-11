const { Router } = require('express')
const router = Router()
const User = require('../models/user.js')

router.post('/', async (req, res) => {
    try {
        const { email, password } = req.body
        const candidate = await User.findOne({ email })
        console.log(candidate)
        if (!candidate) {
            return res.status(400).json({ message: 'User is not finded.' })
        }
        if (candidate.password !== password) {
            return res.status(400).json({ message: 'Password is not correct.' })
        }
        res.json(candidate)

    } catch (e) {
        console.log(e);
        res.status(400).json({ message: "SignIn error" })
    }
})

module.exports = router