'use strict';
module.exports = function(app) {

  app.post('/events/actions', (req, res) => {
      console.log(req.body);
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
                },
                {
                    
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
      console.log(req.body);
      res.send({
        "channel": user_id,
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
      console.log(req);
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

{ type: 'block_actions',
 team: { id: 'T0CAG', domain: 'acme-creamery' },
 user: { id: 'U0CA5', username: 'Amy McGee', team_id: 'T3MDE' },
 api_app_id: 'A0CA5',
 token: 'Shh_its_a_seekrit',
 container:
  { type: 'message',
    text:
     'The contents of the original message where the action originated' },
 trigger_id: '12466734323.1395872398',
 response_url: 'https://www.postresponsestome.com/T123567/1509734234',
 actions:
  [ { type: 'button',
      block_id: '1nI',
      action_id: 'iCZ+',
      text: [Object],
      value: 'frontend',
      action_ts: '1551297273.761228' } ] }
