'use strict'

module.exports = {
  'Search Test NPM' : function (browser) {
    browser
      .url('http://www.npmjs.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=search]', 'babel') //how to know which element is selected -- multiple fields to choose from
      .click('button')
      .pause(1000) // pause long enough to understand current status
      .assert.containsText('h3', 'Babel')
      .end();
  }
};
