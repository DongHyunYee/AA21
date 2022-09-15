var express = require('express');
var app = express();
var port = 3000;

app.get('/', function(reg,res){
    res.send('<a href="/hello">Hello Page</a>');
});

app.get('/Naver', function(reg,res){
    res.send('<a href="http://www.naver.com">Go to naver</a>');
});

app.get('/hello',function(req,res){
    res.send('Hello aa21');
});

app.get('/comsi',function(req,res){
    res.send('Hello Comsi');
});


app.get('/aa21',function(req,res){
    res.send('Hello aa21,Comsi! My first express server!!');
});

var server = app.listen(port,function(){
    console.log('Listening on port %d', server.address().port);
});