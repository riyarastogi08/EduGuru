const express = require('express');
const router = express.Router();
const Model = require('../Models/School');

router.post('/add', (req, res) => {
    console.log(req.body);
    // Storing data to mongoDB
    new Model(req.body).save()
    .then(result => {
        res.json(result)
    }).catch((err) => {
        console.log(err);
        res.status(500) .json(err)    
    });
})

router.post('/authenticate', (req, res) => {
    Model.findOne(req.body)
    .then((result) => {
        if(result) res.json (result);
        else res.status(400).json ({message: 'Something went wrong'});
    }).catch((err) => {
       console.log(err);
       res.status(200).json (err)
    });
})

router.get('/getall', (req, res) => {
    Model.find ({})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
       console.log(err);
       res.status(200).json (err)
    });
})

router.get('/getbyid/:id',(req,res) => {
    // empty brackets will give all the data from the database
    console.log(req.params.id)
    Model.findById(req.params.id)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.error(err)
        res.status(500).json(err)
    }); 
});

module.exports= router;         