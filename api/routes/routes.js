'use strict';
module.exports = function(app) {
  var onboarding = require('../controllers/onboardingController');

  // onboarding Routes
  app.route('/events/newuser')
    .post(onboarding.welcome);


  app.route('/events/department')
    .post(onboarding.list_teams)

  app.route('/events/department/dev')
    .post(onboarding.start_dev)

    app.route('/events/department/design')
    .post(onboarding.start_design)

    app.route('/events/department/vendormgmt')
    .post(onboarding.start_vendor)
    
};