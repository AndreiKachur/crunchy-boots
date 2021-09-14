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
    // const boots = await Boots.find()
    // res.json(boots)
    res.json([{
        "id": 1,
        "title": "ZX 1K Boost",
        "category": "Sport",
        "url": [
            "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/11542ed35bf04f719895ac45017ab3da_9366/Krossovki_ZX_1K_Boost_belyj_FY5654_04_standard.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/d8896542aa4c45b39b4fac45017aa57d_9366/Krossovki_ZX_1K_Boost_belyj_FY5654_02_standard_hover.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/89b577aff1f440ac87e9ac45017a8c4f_9366/Krossovki_ZX_1K_Boost_belyj_FY5654_01_standard.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/ba9f37e34df44951aba2ac45017ac29c_9366/Krossovki_ZX_1K_Boost_belyj_FY5654_05_standard.jpg"
        ],
        "homelink": "https://www.adidas.ru/krossovki-zx-1k-boost/FY5654.html",
        "gender": "Female",
        "price": 49,
        "color": "white",
        "newCollection": "false",
        "topseller": "TOP",
        "discount": "false",
        "boost": "boost",
        "description": "none",
        "actualSize": 0,
        "sizes": [
            {
                "size": 34,
                "id": 134,
                "rest": 3
            },
            {
                "size": 35,
                "id": 135,
                "rest": 0
            },
            {
                "size": 36,
                "id": 136,
                "rest": 5
            },
            {
                "size": 37,
                "id": 137,
                "rest": 2
            },
            {
                "size": 38,
                "id": 138,
                "rest": 5
            },
            {
                "size": 39,
                "id": 139,
                "rest": 2
            },
            {
                "size": 40,
                "id": 140,
                "rest": 5
            },
            {
                "size": 41,
                "id": 141,
                "rest": 2
            }
        ]
    },
    {
        "id": 2,
        "title": "Harden Natural",
        "category": "Lifestyle",
        "url": [
            "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/6344c47515e146868fe9ac9a017ed9e0_9366/Krossovki_Harden_Vol.5_Futurenatural_belyj_GY7489_04_standard.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/11edbbbc056f4c9e92e1ac9a0178ebd9_9366/Krossovki_Harden_Vol.5_Futurenatural_belyj_GY7489_02_standard_hover.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/2e00fae9072f419aa778ac9a01788df8_9366/Krossovki_Harden_Vol.5_Futurenatural_belyj_GY7489_01_standard.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/bf2dea95678749598c06ac9a01797b49_9366/Krossovki_Harden_Vol.5_Futurenatural_belyj_GY7489_05_standard.jpg"
        ],
        "video": "none",
        "homelink": "https://www.adidas.ru/krossovki-harden-vol.5-futurenatural/GY7489.html",
        "gender": "Male",
        "price": 36,
        "color": "multi",
        "newCollection": "false",
        "topseller": "false",
        "discount": "false",
        "boost": "boost",
        "description": "none",
        "actualSize": 0,
        "sizes": [
            {
                "size": 39,
                "id": 239,
                "rest": 2
            },
            {
                "size": 40,
                "id": 240,
                "rest": 2
            },
            {
                "size": 41,
                "id": 241,
                "rest": 2
            },
            {
                "size": 42,
                "id": 242,
                "rest": 2
            },
            {
                "size": 43,
                "id": 243,
                "rest": 2
            },
            {
                "size": 44,
                "id": 244,
                "rest": 2
            },
            {
                "size": 45,
                "id": 245,
                "rest": 3
            },
            {
                "size": 46,
                "id": 246,
                "rest": 2
            }
        ]
    }]
    )
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