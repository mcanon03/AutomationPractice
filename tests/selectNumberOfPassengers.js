'use strict'

module.exports = {
  'select # of passengers': (client) => {

    const homePage = client.page.BRBhome();
    const reviewOrder = client.page.reviewOrder();

    homePage
      .navigate()     //navigate to url in BRBhome page object
      .isLoaded()     //check to see if last object on page is loaded
      .setNumOfPassengers(8)  //TO DO: have test case that passes in # of passengers

    reviewOrder
      .isLoaded()

    client
      .pause(2000)
      .end();

  }

}
