const express = require('express');
const Model = require('../models/contactModel');

const router = express.Router();

// post
router.post('/add', (req, res) => {
    console.log(req.body);    //ishka mtlb mongo db me save ho jayega...data
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


//getbyid
router.get('/getbyid/:id', (req, res) => {
    Model.findById(req.params.id).populate('student')
        .then((result) => {
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


module.exports = router;

