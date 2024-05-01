const {Schema, model} = require('../connection')
const playwaySchema = new Schema({
    playwayName: String,
    email: String,
    phNo: Number,
    fees: Number,
    address: String

});
module.exports = model('playway', playwaySchema)