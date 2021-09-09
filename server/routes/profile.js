const { Router } = require('express')
const router = Router()
const User = require('../models/user.js')

router.post('/', async (req, res) => {
    const { user, cart } = req.body
    // console.log(user);
    // console.log(cartArray);
    const c = cart[0]
    const candidate = new User({
        username: user.username,
        email: user.email,
        phoneNumber: user.phoneNumber,
        cart: {
            items: {
                title: c.title,
                bootId: c._id,
                price: c.price,
                amount: c.amount
            }
        }
    })
    await candidate.save()

    // console.log(req.body)
    res.status(200).json({ message: "Order was placed." }).redirect('/profile')

})

module.exports = router