'use strict';
module.exports = function(app) {
  var onboarding = require('../controllers/onboardingController');

  app.post('/events/department', (req, res) => {
      res.send({
          
      })
  });

  app.post('/events/department/dev', (req, res) => {
    res.send({
        "title" : "",
        "body" : "Welcome to the developer team!"
    })
  });

app.post('/events/department/design', (req, res) => {
    res.send({
        "title" : "",
        "body" : "Welcome to the design team!"
    })
});

app.post('/events/department/vendor', (req, res) => {
    res.send({
        "title" : "",
        "body" : "Welcome to the vendor management team!"
    })
});

app.post('/events/department/', (req, res) => {
    res.send({
        //json goes here
    })
});
};