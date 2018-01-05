var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var api = require('./server/routes/api');
var app = express();
// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));   

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/api',api);

app.get('*', function (req, res) {
    const index = path.join(__dirname, 'dist', 'index.html');
    res.sendFile(index);
  });

  

const port = process.env.PORT || 8080;
app.set('port',port);

app.listen(port,function(){
    console.log('App Lunch'+port);
});