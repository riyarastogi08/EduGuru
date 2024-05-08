const {Schema, model} = require('../connection')
const userSchema = new Schema({
    playwayname: String,
    fees: String,
    playwaydetail: String,
    playwayaddress: String,
    image: String,
    email: String,
    phone: Number,
   
});
module.exports = model('playway', userSchema)