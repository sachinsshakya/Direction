const express = require('express');
var router = express.Router();
/* var ObjectId = require('mongoose').Types.ObjectId; */
var user = require('../models/user');
var element = require('../models/element');
var Video = require('../models/video');
const jwt = require('jsonwebtoken');
var nodemailer = require('nodemailer');

function verifyToken(req, res, next) {
    if (!req.headers.Authorization) {
        return res.status(401).send('Unauthorized User')
    }
    let token = req.headers.Authorization.split(' ')[1][2][3]
    if (token === 'null') {
        return res.status(401).send('Unauthorized User')
    }
    let payload = jwt.verify(token, 'secretkey')
    if (!payload) {
        return res.status(401).send('Unauthorized User')
    }
    req.userId = payload.subject
    next()
}

router.get('/user', (req, res) => {
    console.log('get reqest for user data');
    user.find({})
        .exec((err, users) => {
            if (!err) {
                res.json(users);
            } else {
                console.log('Error in retriving Users:' + JSON.stringify(err, undefined, 2));
            }
        });
});

router.get('/user/:id', (req, res) => {
    console.log('get reqest for user data');
    user.findById(req.params.id)
        .exec((err, users) => {
            if (!err) {
                res.json(users);
            } else {
                console.log('Error in retriving Users:' + JSON.stringify(err, undefined, 2));
            }
        });
});

router.post('/users/register', (req, res) => {
    var newuser = new user();
    newuser.username = req.body.username;
    newuser.email = req.body.email;
    newuser.password = newuser.generateHash(req.body.password);
    newuser.save((err, inserteduser) => {
        if (!err) {
            let payload = { subject: inserteduser._id }
            let token = jwt.sign(payload, 'secretkey')
            console.log('user register successfully');
            res.json({ token });
        }
        else {
            console.log('Error in user save:' + JSON.stringify(err, undefined, 2));
        }
    })
})

router.post('/users/login', (req, res) => {
    let userEmail = req.body.email;
    let userPassword = req.body.password;

    user.findOne({ email: userEmail }, (error, user) => {
        if (!user) {
            res.status(401).send('invalid Email')
        } else {
            if (user.validPassword(userPassword, user.password)) {
                let payload = { subject: user._id }
                let token = jwt.sign(payload, 'secretkey')
                userData = {
                    user: user,
                    token: token
                }
                res.status(200).send({ userData })

            } else {
                res.status(401).send('invalid password')
            }
        }
    })
})
router.put('/users/updateUser/:id', (req, res) => {
    console.log('reqest for update User');
    user.findByIdAndUpdate(req.params.id,
        {
            $set: {
                username: req.body.username,
                email: req.body.email,
                address: req.body.address,
                pin: req.body.pin,
                phone: req.body.phone,
            }
        }, (err, updated) => {
            if (!err) {
                console.log('User updated successfully');
                res.json(updated);
            }
            else {
                console.log('Error in updating user:' + JSON.stringify(err, undefined, 2));
            }
        })
});

router.get('/element', (req, res) => {
    console.log('get reqst for all elements');
    element.find({ status: 'active' })
        .exec((err, elements) => {
            if (!err) {
                res.json(elements);
            } else {
                console.log('Error in retriving Element:' + JSON.stringify(err, undefined, 2));
            }
        });
});

router.post('/users/element', (req, res) => {
    var newElement = new element();
    newElement.name = req.body.name;
    newElement.weight = req.body.weight;
    newElement.symbol = req.body.symbol;
    newElement.status = 'active';
    console.log(newElement.name, newElement.weight, newElement.symbol);
    newElement.save((err, insertedElement) => {
        if (!err) {
            console.log('element added successfully');
            res.json(insertedElement);
        }
        else {
            console.log('Error in element save:' + JSON.stringify(err, undefined, 2));
        }
    })

})

router.put('/users/updateElement/:id', (req, res) => {
    console.log('reqest for update Element');
    element.findByIdAndUpdate(req.params.id,
        {
            $set: {
                name: req.body.name,
                weight: req.body.weight,
                symbol: req.body.symbol
            }
        }, (err, updated) => {
            if (!err) {
                console.log('element updated successfully');
                res.json(updated);
            }
            else {
                console.log('Error in element update:' + JSON.stringify(err, undefined, 2));
            }
        })
});

router.delete('/users/deleteElement/:id', (req, res) => {
    console.log('get reqest for deleting Element');
    element.findByIdAndUpdate(req.params.id,
        { $set: { status: 'inactive' } },
        (err, updated) => {
            if (!err) {
                console.log('element deleted successfully');
                res.json(updated);
            }
            else {
                console.log('Error in element delete:' + JSON.stringify(err, undefined, 2));
            }
        })
})


module.exports = router;