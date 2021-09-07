const { model, Schema } = require('mongoose')

const boots = new Schema({}, { collection: 'Boots' })

module.exports = model('Boots', boots)