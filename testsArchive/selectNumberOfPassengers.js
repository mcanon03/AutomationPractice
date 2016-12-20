'use strict'

module.exports = {
  'select # of passengers': (client) => {

    const homePage = client.page.landingPage();

    homePage
      .navigate()     //navigate to url in BRBhome page object
      .isLoaded()     //check to see if last object on page is loaded
      //.select('2')

    client
      .end();

  }


}
