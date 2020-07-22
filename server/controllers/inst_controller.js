const express = require('express');
var router = express.Router();

var institution = require('../models/institution');

router.post('/get_Inst', (req, res) => {
    console.log('get reqest for institution');
    institution.find({user_id: req.body._id})
        .exec((err, institutions) => {
            if (!err) {
                res.json(institutions);
            } else {
                console.log('Error in retriving institutions:' + JSON.stringify(err, undefined, 2));
            }
        });
});

router.post('/save', (req, res) => {
    var newInstitution = new institution();
    newInstitution.user_id = req.body.user_id;
    newInstitution.institution = req.body.institution;
    newInstitution.course = req.body.course;
    newInstitution.save((err, insertedInstitution) => {
        if (!err) {
            console.log('Institution added successfully');
            res.json(insertedInstitution);
        }
        else {
            console.log('Error in institution save:' + JSON.stringify(err, undefined, 2));
        }
    })
})

module.exports = router;