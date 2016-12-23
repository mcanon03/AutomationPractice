'use strict'


module.exports = {

  'Navigate to Review your order page': (client) => {

    const homePage = client.page.BRBhome();
    const reviewOrder = client.page.reviewOrder();
    const numOfPassengers = 8;

    homePage
      .navigate()     //navigate to url in BRBhome page object
      .isLoaded()     //check to see if last object on page is loaded

      //TO DO: have test case that passes in # of passengers
      .setNumOfPassengers(numOfPassengers)

    reviewOrder
      .isLoaded()

    client
      .end();

  },

  'Number of passengers fields always have same selected option': (client) => {

    const homePage = client.page.BRBhome();
    const reviewOrder = client.page.reviewOrder();
    const numOfPassengers = 8;

    homePage
      .navigate()     //navigate to url in BRBhome page object
      .isLoaded()     //check to see if last object on page is loaded

      //TO DO: have test case that passes in # of passengers
      .setNumOfPassengers(numOfPassengers)

    client
      .end();

  }

}
