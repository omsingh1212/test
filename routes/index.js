var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
        res.render('index.njk', {
        title : "Sample Node Express + Nunjucks app"
        });
});


module.exports = router;
