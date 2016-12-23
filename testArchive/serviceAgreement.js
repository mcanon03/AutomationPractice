'use strict'

module.exports = {
  '': (client) => {

    const reviewOrder = client.page.reviewOrder();

    //

    client
      .pause(2000)
      .end();

  }

}
