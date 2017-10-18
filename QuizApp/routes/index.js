var express = require('express');
var util = require('util');
var router = express.Router();


var knex = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'root',
    password : '',
    database : 'QuizAppDb'
  }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  knex.select().from('testTable').then(function(rows){
    res.render('index', {title: 'After query', row: util.inspect(rows, false, null)});
  })
  // res.render('index', { title: 'Express' });
});

module.exports = router;
