// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  // specs: [
  //   './e2e/**/*.e2e-spec.ts'
  // ],

  // test suites to run test case
  // run> protractor protractor.conf.js --suite skeletonTwo
  suites: {
      skeletonTwo: './e2e/**/*.e2e-spec.ts',
      // projects: ['tests/e2e/contact_search/**/*Spec.js','tests/e2e/venue_search/**/*Spec.js']
  },
  capabilities: {
    'browserName': 'chrome'
  },
  /*
    multiCapabilities: [
        { 'browserName': 'chrome' },
        { 'browserName': 'firefox' }
    ],
    maxSession: 3,
*/
  // directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};
