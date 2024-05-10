const {Schema, model} = require('../connection')
const userSchema = new Schema({
    schoolname: String,
    fees: String,
    schooldetail: String,
    schooladdress: String,
    image: String,
    email: String,
    phone: Number,
    
   
});
module.exports = model('school', userSchema)