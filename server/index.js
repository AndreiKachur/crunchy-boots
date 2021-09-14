const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const Boots = require('./models/boots.js')
const User = require('./models/user.js')
const Order = require('./models/order.js')
const profile = require('./routes/profile')
const login = require('./routes/login')
const order = require('./routes/order')
const keys = require('./keys')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/profile', profile)
app.use('/login', login)
app.use('/order', order)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'))
    })
}
const PORT = process.env.PORT || keys.BASE_PORT

app.get('/boots', async (req, res) => {
    const boots = await Boots.find()

    if (Array.isArray(boots) && boots.length > 10) {
        res.json(boots)
    } else if (boots === undefined) {
        res.status(530)
        throw new Error('Boots undefined')
    } else {
        res.status(540)
        throw new Error('This is not an Array')
    }
    res.status(550)

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
        await mongoose.connect(keys.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })

    } catch (e) {
        console.log(e);
    }
}
start()