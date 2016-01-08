var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

router.get('/hello', function(req, res, next) {
    res.json({
        msg: 'Hello World! xyz'
    });
});

router.post('/hello', function(req, res, next) {
    res.json({
        msg: 'Hello World! xyz',
	method: 'POST'
    });
});


module.exports = router;
