const { Router } = require('express')
const { db } = require('mongoose')
const User = require('../models/user.js')
const router = Router()
const Order = require('../models/order')
const Common = require('../models/common')

router.post('/', async (req, res) => {
    try {
        const { userId, cart } = req.body
        const lastOrderNumber = (await Common.findOne({ id: "1" })).lastOrderNumber
        const orderNumber = lastOrderNumber + 1

        const order = new Order({
            userId: userId,
            orderNumber: orderNumber,
            date: Date.now(),
            cart: cart
        })
        await Common.updateOne({ id: "1" }, { $set: { lastOrderNumber: orderNumber } })
        await order.save()

        const orders = await Order.find({ userId: userId })
        res.json(orders)

    } catch (e) {
        console.log(e);
        res.status(400).json({ message: "Order error" })
    }
})

module.exports = router