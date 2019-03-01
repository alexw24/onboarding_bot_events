'use strict';
module.exports = function(app) {

  app.post('/events/actions', (req, res) => {
      console.log(req);
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
        }
        if(val.value == 'backend') {
            res.send([
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": "*Welcome to the backend team!*  :construction:  :gear: \nHere's a list of members on the team:"
                    }
                },
                {
                    "type": "section",
                    "fields": [
                        {
                            "type": "mrkdwn",
                            "text": "<@U9FUXJTST>"
                        },
                        {
                            "type": "mrkdwn",
                            "text": "<@UEQ5JKC93>"
                        },
                        {
                            "type": "mrkdwn",
                            "text": "<@U7ZDJFB7V>"
                        },
                        {
                            "type": "mrkdwn",
                            "text": "<@U94SVD6KG>"
                        },
                        {
                            "type": "mrkdwn",
                            "text": "<@U8ZCF7919>"
                        },
                        {
                            "type": "mrkdwn",
                            "text": "<@U7ZNELR2R>"
                        }
                    ]
                }
            ])
        };
        if (val.value == 'frontend') {
            res.send([
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": "*Welcome to the frontend team!* :crystal_ball: :mag: \nHere's a list of members on the team:"
                    }
                },
                {
                    "type": "section",
                    "fields": [
                        {
                            "type": "mrkdwn",
                            "text": "<@U80J47279>"
                        },
                        {
                            "type": "mrkdwn",
                            "text": "<@UCG5QPK7X>"
                        },
                        {
                            "type": "mrkdwn",
                            "text": "<@UASE2P058>"
                        },
                        {
                            "type": "mrkdwn",
                            "text": "<@UGFK48WDN>"
                        },
                        {
                            "type": "mrkdwn",
                            "text": "<@U96R0RAUC>"
                        }
                    ]
                }
            ])
        };
      })

  });

  app.post('/events/department', (req, res) => {
      res.send({
        "channel": req.body.user.id,
        "blocks": [
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
      });
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