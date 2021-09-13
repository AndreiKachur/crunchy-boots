const express = require('express')
const config = require('config')
// const path = require('path')
const mongoose = require('mongoose')
const Boots = require('./models/boots.js')
const User = require('./models/user.js')
const Order = require('./models/order.js')
const profile = require('./routes/profile')
const login = require('./routes/login')
const order = require('./routes/order')
const { db } = require('./models/boots.js')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.use(async (req, res, next) => {
//     try {
//         const user = await User.findById('6139bb9982969ddce3c252d2')
//         req.user = user
//         next()
//     } catch (e) {
//         console.log(e);
//     }
// })

app.use('/profile', profile)
app.use('/login', login)
app.use('/order', order)

const PORT = process.env.PORT || config.get('port')

app.get('/boots', async (req, res) => {
    const boots = await Boots.find()
    res.status(200).json(boots)
})
app.get('/user', async (req, res) => {
    const user = await User.find(req.query)
    res.json(user)
})
app.get('/orders', async (req, res) => {
    const orders = await Order.find(req.query)
    res.json(orders)
})

async function start() {
    try {
        await mongoose.connect(config.get('uri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        // const common = await db.collection('common')
        // console.log(common);
        // db.collection('common').insertOne({ lastOrderNumber: 0 })
        // const num = await db.collection('common').find().toArray()
        // await db.collection('common').updateOne({ id: "1" }, { $set: { lastOrderNumber: 2 } })
        // const num = (await db.collection('common').findOne({ id: "1" })).lastOrderNumber

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })

    } catch (e) {
        console.log(e);
    }
}
start()