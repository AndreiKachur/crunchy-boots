const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    cart: {
        items: [
            {
                title: { type: String, required: true },
                bootId: { type: Schema.Types.ObjectId, required: true, ref: 'Boots' },
                price: { type: Number, required: true },
                amount: { type: Number, required: true, default: 1 },
            }
        ]
    }
})

module.exports = model('User', userSchema)