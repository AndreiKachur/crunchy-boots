const express = require('express')
const config = require('config')
// const path = require('path')
const mongoose = require('mongoose')
const Boots = require('./models/boots.js')
const User = require('./models/user.js')
const profile = require('./routes/profile')

const app = express()

app.use(express.json())
// app.use(express.static(path.join(__dirname, 'public')))
// app.use(express.static(path.join(__dirname, 'src')))
app.use(express.urlencoded({ extended: true }))
app.use(async (req, res, next) => {
    try {
        const user = await User.findById('6139bb9982969ddce3c252d2')
        req.user = user
        next()
    } catch (e) {
        console.log(e);
    }
})

app.use('/profile', profile)

const PORT = process.env.PORT || config.get('port')

app.get('/boots', async (req, res) => {
    const boots = await Boots.find()
    res.status(200).json(boots)
})
app.get('/users', async (req, res) => {
    const users = await User.find()
    res.json(users)
})

async function start() {
    try {
        await mongoose.connect(config.get('uri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        // const candidate = await User.findOne()
        // if (!candidate) {
        //     const user = new User({
        //         username: 'Andrei',
        //         email: 'underfil@mail.ru',
        //         phoneNumber: 89030152804,
        //         cart: { items: [] }
        //     })
        //     await user.save()
        // }


        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })

    } catch (e) {
        console.log(e);
    }
}
start()