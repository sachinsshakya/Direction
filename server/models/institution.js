const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const institutionSchema = new Schema({
    user_id: String,
    institution: String,
    course: String,
});

module.exports = mongoose.model('institution', institutionSchema);