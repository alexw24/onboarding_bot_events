'use strict';
module.exports = function(app) {
  var onboarding = require('../controllers/controller');


  app.post('/events/actions', (req, res) => {
      req.body.actions.map(val => {
        if(val.value == 'design') {
            res.send([
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": "*Welcome to the design team!* :art:   :writing_hand:\nHere's a list of members on the team:"
                    }
                },
                {
                    "type": "section",
                    "fields": [
                        {
                            "type": "mrkdwn",
                            "text": "<@U8RSUTGHL>"
                        },
                        {
                            "type": "mrkdwn",
                            "text": "<@UD6P13AP7>"
                        },
                        {
                            "type": "mrkdwn",
                            "text": "<@UFX11L0HX>"
                        },
                        {
                            "type": "mrkdwn",
                            "text": "<@UALGA7P40>"
                        },
                        {
                            "type": "mrkdwn",
                            "text": "<@UAJH71T9A>"
                        },
                        {
                            "type": "mrkdwn",
                            "text": "<@UAH5FKBTL>"
                        }
                    ]
                }
            ]);
        } else {
          res.send({
              "title" : "",
              "body" : "not design"
          });
        };
      })

  });

  app.post('/events/department', (req, res) => {
      res.send([
        {
            "type": "actions",
            "elements": [
                {
                    "type": "button",
                    "text": {
                        "type": "plain_text",
                        "text": "Design",
                        "emoji": true
                    },
                    "value": "design"
                },
                {
                    "type": "button",
                    "text": {
                        "type": "plain_text",
                        "text": "Backend",
                        "emoji": true
                    },
                    "value": "backend"
                },
                {
                    "type": "button",
                    "text": {
                        "type": "plain_text",
                        "text": "Frontend",
                        "emoji": true
                    },
                    "value": "frontend"
                },
                {
                    "type": "button",
                    "text": {
                        "type": "plain_text",
                        "text": "Vendor management",
                        "emoji": true
                    },
                    "value": "vendor"
                }
            ]
        },
        {
            "type": "context",
            "elements": [
                {
                    "type": "plain_text",
                    "text": "Please select the team you'll be working with at SIBI.",
                    "emoji": true
                }
            ]
        }
    ]
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