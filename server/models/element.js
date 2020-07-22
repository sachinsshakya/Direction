const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const elementSchema = new Schema({
    name: String,
    weight: String,
    symbol: String, 
    status: String
});

module.exports = mongoose.model('element', elementSchema);