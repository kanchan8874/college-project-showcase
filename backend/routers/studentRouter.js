const express = require('express');
const Model = require('../models/studentModel');

const router = express.Router();
require('dotenv').config();
const jwt = require('jsonwebtoken');
const verifyToken = require('../middleware/verifytoken');

// post
router.post('/add', (req, res) => {
    console.log(req.body);
    new Model(req.body).save()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);

        });

});
// getall
router.get('/getall', (req, res) => {
    Model.find()
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});


//denotes url parameater....
//getbycity
router.get('/getbycity/:city', (req, res) => {
    Model.find({ city: req.params.city })
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(result);
        });


});

//getbyid
router.get('/getbyid/:id', (req, res) => {
    Model.findById(req.params.id)
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(result);

        });
})

router.get('/getuser', verifyToken, (req, res) => {
    // console.log(req.user);

    Model.findById(req.user._id)
        .then((result) => {
            console.log(result);

            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(result);

        });
})

//delete
router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);

        });

});

//update
router.put('/update/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);

        });

});

router.post('/authenticate', (req, res) => {
    Model.findOne(req.body)
        .then((result) => {
            if (result) {
                const { email, _id } = result;
                const payload = { _id, email };
                const token = jwt.sign(
                    payload,
                    process.env.JWT_SECRET,
                    { expiresIn: '2d' }
                );
                res.status(200).json({ token });
            } else {
                res.status(403).json({ message: 'Invalid username or password' });
            }
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);

        });
})


module.exports = router;
