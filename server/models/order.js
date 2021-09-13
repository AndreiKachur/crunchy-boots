const { Schema, model } = require('mongoose')
// const orderItem = require('./order-item')

const orderSchema = new Schema({
    userId: {
        type: String,
        required: true,
        ref: 'User'
    },
    orderNumber: {
        type: Number,
        required: true,
        unique: true
    },
    date: {
        type: String,
        required: true,
        unique: true
    },
    cart: {
        type: Array,
        required: true
    }
})

module.exports = model('Order', orderSchema)