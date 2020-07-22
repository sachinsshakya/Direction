const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/directiondb',{useNewUrlParser: true},(err) => {
if(!err)
     console.log('mongodb connection succeded.');
     else
        console.log('error in DB connection: '+JSON.stringify(err,undefined,2));
});
module.exports = mongoose;
