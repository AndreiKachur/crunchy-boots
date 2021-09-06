const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors');
const Boots = require('./models/boots.js')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'src')))
app.use(express.urlencoded({ extended: true }))

const PORT = process.env.PORT || 3001

app.get('/boots', async (req, res) => {
    const boots = await Boots.find()
    res.status(200).json(boots)
})

async function start() {
    try {
        const url = 'mongodb+srv://Andrei_K:eCAwwJ74Dhc722CH@cluster0.m7wkh.mongodb.net/Crunchy_Boots'
        await mongoose.connect(url, {
            useNewUrlParser: true
        })

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })

    } catch (e) {
        console.log(e);
    }
}
start()