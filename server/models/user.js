const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bcrypt = require('bcrypt');

const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    address: String,
    pin: String,
    phone: String,
    dob: Date,
});

userSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(9));
}
userSchema.methods.validPassword = function(userPassword, existingPass){
    return bcrypt.compareSync(userPassword, existingPass);
}

module.exports = mongoose.model('user', userSchema);

