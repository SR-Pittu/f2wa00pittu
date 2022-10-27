var express = require('express');

var router = express.Router();



/* GET home page. */

router.get('/', function(req, res, next) {

    var n1=(Math.random()*10.99)

    var n2=(Math.random()*10)

    var n3=(Math.random()*10.5)

    var froundFunction=Math.fround(n1);

    var randomFunction;

    var roundFunction=Math.round(n3)



    res.render('computation',

    {

        title:'SobhaReddy Pittu Computes Functions',

        n1:n1,

        n2:n2,

        n3:n3,

        a:froundFunction,

        b:randomFunction,

        c:roundFunction,

    });

     

});

module.exports=router;
