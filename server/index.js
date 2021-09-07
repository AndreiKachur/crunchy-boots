const express = require('express')
const config = require('config')
// const path = require('path')
const mongoose = require('mongoose')
// const cors = require('cors');
const Boots = require('./models/boots.js')

const app = express()

// app.use(cors())
app.use(express.json())
// app.use(express.static(path.join(__dirname, 'public')))
// app.use(express.static(path.join(__dirname, 'src')))
app.use(express.urlencoded({ extended: true }))

const PORT = process.env.PORT || config.get('port')

app.get('/boots', async (req, res) => {
    const boots = await Boots.find()
    res.status(200).json(boots)
})

async function start() {
    try {
        await mongoose.connect(config.get('uri'), {
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