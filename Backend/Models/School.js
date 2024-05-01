const {Schema, model} = require('../connection')
const schoolSchema = new Schema({
    name: String,
    email: String,
    phNo: Number,
    fees: Number,
    address: String
});
module.exports = model('school', schoolSchema)