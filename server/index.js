const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const Boots = require('./models/boots.js')
const User = require('./models/user.js')
const Order = require('./models/order.js')
const profile = require('./routes/profile')
const login = require('./routes/login')
const order = require('./routes/order')
const keys = require('./keys')

const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/profile', profile)
app.use('/login', login)
app.use('/order', order)

app.get('/boots', async (req, res) => {
    const boots = await Boots.find()
    res.json(boots)
})
app.get('/user', async (req, res) => {
    const user = await User.find(req.query)
    res.json(user)
})
app.get('/orders', async (req, res) => {
    const orders = await Order.find(req.query)
    res.json(orders)
})

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')))
}

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