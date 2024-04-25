const {Schema, model} = require('../connection')
const schoolSchema = new Schema({
    name: String,
    category: String,
    address: String,
    description: String

});
module.exports = model('school', schoolSchema)