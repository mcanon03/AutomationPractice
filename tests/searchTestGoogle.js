module.exports = {
  'Search Test Google' : function (browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      //.assert.title('Google')
      //.assert.visible('input[type=text]')
      .setValue('input[type=text]', 'crossfit214')
      .waitForElementVisible('button[name=btnG]', 1000)
      .click('button[name=btnG]')
      .pause(1000)
      .assert.containsText('#res h3.r a',
        'CrossFit 214 Gym | 4226 Ross Dallas Texas CrossFit Strength and ...')
      .end();
  }
};
