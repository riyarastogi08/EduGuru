const {Schema, model} = require('../connection')
const collegeSchema = new Schema({
    college_name: String,
    email: String,
    ph_no: Number,
    fees: Number,
    address: String

});
module.exports = model('college', collegeSchema)