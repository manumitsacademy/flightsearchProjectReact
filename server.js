const path = require("path");
const express = require("express");
const app = express();
var bodyParser = require('body-parser')
const data = require('./data.json')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const cors = require('cors');
app.use(cors());
app.use(express.static(__dirname + '/build')); 
app.get('/apidata',function(req,res){
    setTimeout(()=>{
        res.send(data)
    },3000)
    
});
app.get('/*', function(req,res){
    res.sendFile(path.join(__dirname+'/build'+'/index.html'))
});
app.listen(8080);
