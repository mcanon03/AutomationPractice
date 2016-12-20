'use strict'

module.exports = {
  'select # of passengers': (client) => {

    const homePage = client.page.BRBhome();

    homePage
      .navigate()     //navigate to url in BRBhome page object
      //.isLoaded()     //check to see if last object on page is loaded
      .setNumOfPassengers(8)

    client
      .pause(3000)
      .end();

  }


}
