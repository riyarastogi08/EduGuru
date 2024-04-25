const {Schema, model} = require('../connection')
const collegeSchema = new Schema({
    name: String,
    category: String,
    address: String,
    description: String

});
module.exports = model('college', collegeSchema)