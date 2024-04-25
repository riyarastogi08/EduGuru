const {Schema, model} = require('../connection')
const playwaySchema = new Schema({
    name: String,
    category: String,
    address: String,
    description: String

});
module.exports = model('playway', playwaySchema)