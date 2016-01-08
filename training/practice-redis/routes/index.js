var express = require('express');
var router = express.Router();
var mongoClient = require('mongodb').MongoClient;

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

router.get('/customer/:firstName', function(req, res, next) {
    console.log(req.params);
    mongoClient.connect('mongodb://localhost:27017/test').then(function(db) {
        return db.collection('customer').find({firstName: req.params.firstName}).toArray()
    })
    .then(res.json.bind(res))
    //.then(function(data){res.join(data)})
    .catch(function(err){
        console.log('err', err);
        next(err);
    });
});

router.post('/customer', function(req, res, next) {
    if(!req.body.firstName) {
        return res.json({msg: 'first name is required'});
    }
    mongoClient.connect('mongodb://localhost:27017/test')
        .then(function(db){
            return db.collection('customer').insertOne(req.body);
        })
        .then(function(data){
            res.json(data);
        })
        .catch(function(err){
            console.log(err);
            next(err);
        })
});

module.exports = router;
