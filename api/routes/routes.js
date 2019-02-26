'use strict';
module.exports = function(app) {
  var onboarding = require('../controllers/controller');


  app.post('/events/actions', (req, res) => {
      if(req.actions.selected_option.value == 'design') {

      };

      if(req.actions.selected_option.value == 'backend') {

    };

    if(req.actions.selected_option.value == 'frontend') {

    };

    if(req.actions.selected_option.value == 'vendor') {
      
    };
      
  })

  app.post('/events/department', (req, res) => {
      res.send({
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "Please select the team you'll be working with at SIBI."
            },
            "accessory": {
                "type": "static_select",
                "placeholder": {
                    "type": "plain_text",
                    "text": "Select an item",
                    "emoji": true
                },
                "options": [
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "design",
                            "emoji": true
                        },
                        "value": "design"
                    },
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "frontend",
                            "emoji": true
                        },
                        "value": "frontend"
                    },
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "backend",
                            "emoji": true
                        },
                        "value": "backend"
                    },
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "vendor management",
                            "emoji": true
                        },
                        "value": "vendor"
                    }
                ]
            }
        }
      )
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