var express = require('express');

var router = express.Router();



/* GET home page. */

router.get('/', function(req, res, next) {

    var n1=(Math.random())

    var n2=(Math.random())

    var n3=(Math.random())

    var froundFunction=Math.fround(n1)

    var roundFunction=Math.round(n3)



    res.render('computation',

    {

        title:'SobhaReddy Pittu Computes Functions',

        n1:n1,

        n2:n2,

        n3:n3,

        a:froundFunction,
        
        c:roundFunction,

    });

     

});

module.exports=router;
