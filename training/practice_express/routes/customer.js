var router = require('express').Router();
var MongoClient = require('mongodb').MongoClient;

router.get('/', function(req, res, next) {
    // db query all customer info
    MongoClient.connect('mongodb://localhost:27017/test', function(err, db) {
        db.collection('customer').find().toArray(function(err, data){
            res.json(data);
        });
    });
});

module.exports = router;
