var express = require ('express');
var app = express();

app.get('/',function(req,res){
    var person={Companyname:'Delittes',firstname:'chanchal',lastname:'agrawal',age:'25'};
    res.send(person);

});

var server =app.listen(9000);