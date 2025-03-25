const express = require('express');
const Model = require('../models/projectModel');

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
    Model.find({ approved: true })
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// getall
router.get('/getallproject', (req, res) => {
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
    Model.findById(req.params.id).populate('student')
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(result);

        });
})
//delete
router.delete('/delete/:id', async (req, res) => {
    try {
        const deletedProject = await Model.findByIdAndDelete(req.params.id);
        
        if (!deletedProject) {
            return res.status(404).json({ message: 'Project not found' });
        }
        
        res.status(200).json({ 
            success: true, 
            message: 'Project deleted successfully' 
        });
    } catch (error) {
        console.error('Delete error:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Error deleting project', 
            error: error.message 
        });
    }
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
