var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  Task = require('./api/models/model'), //created model loading here
  bodyParser = require('body-parser');
  


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/routes'); //importing route
routes(app); //register the route


app.listen(port, 40, callback => {
  console.log('todo list RESTful API server started on: ' + port);
});
