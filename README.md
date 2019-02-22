# onboarding-bot


## Slack Events API
Many apps built using the Events API will follow the same abstract event-driven sequence:
1. A user creates a circumstance that triggers an event subscription to your application
1. Your server receives a payload of JSON describing that event
1. Your server acknowledges receipt of the event
1. Your business logic decides what to do about that event
1. Your server carries out that decision

## Bot outline

This slackbot will prompt the user with choices, and offer responses based on the choice. With this approach we get to define exactly what information new employees see based on their department.

`Dev`
* Github
* VS Code
* ESLint & Prettier

`Design`
* Trello
* Figma
* Docs that Rico is preparing for new design recruits

`Vendor Management`
* MS Office
* Docs on how we operate, our vendors and manufacturers, etc.
