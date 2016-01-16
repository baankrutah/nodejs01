var app = require('express')();
var bodyParser = require('body-parser');
var userDict = {};

app.use(bodyParser.urlencoded({extended: false }));

app.get('/user/:userId', function(req, res){
  var userId = req.params.userId;
  if (userDict[userId]){
    var userName = userDict[userId];
    res.send('User ID: ' + userId + '  Name:' + userName) ;
  }
  else{
    res.send('User not found');
  }

});

app.post('/user', function(req, res){
  var params = req.body;
  var userId = params.userId; // 100
  var userName = params.userName;
  userDict[userId] = userName;

  res.send(userDict);
});


app.delete('/user/:userId', function(req, res){
  var userId = req.params.userId;
  delete userDict[userId];
  res.send(userDict);
});

//
// app.get('/user/all', function(req, res){
//   res.send(user);
// });

app.listen(5000);
