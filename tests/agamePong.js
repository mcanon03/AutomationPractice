//agame.com - ping pong test
module.exports = {

  '@tags': ['single','agame'],

  'Test agame search and return' : function (browser) {
    browser
    .url('http://www.agame.com')
    .waitForElementVisible('body', 1000)
    .setValue('input[type=text]', 'king ping pong')
    .pause(1000)
    .click('button.button.icon--search')
    .pause(1000)
    .click('a[href="/game/king-ping-pong"]')
    .assert.visible('h1.box-title','King Ping Pong')
    browser
      .end();
  }
  //go to agame.com
  //wait for page to load
  //activate search field
  //type king ping pong
  //wait for search results
  //click king ping pong game
  //expect king ping pong game to load
  //verify box-title: King Ping pong
  //PASS if no error
};
