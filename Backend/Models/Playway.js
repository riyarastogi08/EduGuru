const {Schema, model} = require('../connection')
const playwaySchema = new Schema({
    name: String,
    email: String,
    phone: Number,
    fees: Number
   

});
module.exports = model('playway', playwaySchema)