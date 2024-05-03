const {Schema, model} = require('../connection')
const collegeSchema = new Schema({
    name: String,
    email: String,
    phone: Number,
    fees: Number
   

});
module.exports = model('college', collegeSchema)