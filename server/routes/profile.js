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

        const createdUser = await User.findOne({ email: user.email })

        if (createdUser === undefined) {
            res.status(400).json({ message: "CreatedUser error" })
        }

        res.json(createdUser._id)

    } catch (e) {
        console.log(e);
        res.status(400).json({ message: "SignUp error" })
    }
})

module.exports = router