const { Schema, model } = require('mongoose')

const common = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    lastOrderNumber: {
        type: Number,
        required: true,
    }

})

module.exports = model('Common', common)