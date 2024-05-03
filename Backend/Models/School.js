const {Schema, model} = require('../connection')
const schoolSchema = new Schema({
    name: String,
    email: String,
    phone: Number,
    fees: Number
});
module.exports = model('school', schoolSchema)