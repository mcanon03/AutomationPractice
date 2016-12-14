'use strict';

module.exports = {
  '@tags': ['pageObjectTest', 'npmSiteTest'],

  'npm can search for chance': (client) => {

    const homePage = client.page.npmHome();
    const npmSearchResults = client.page.npmSearchResults();

    homePage
        .navigate()
        //.navigate corresponds to module.exports and loads URL function in npmHome
        .isLoaded()
        //.isLoaded corresponds to the isLoaded const in npmHome and looks for last object to be loaded on page
        .search('Chance')
        //.search calls search function in npmHome.js file
    npmSearchResults
        .isLoaded()
        .assert.elementPresent("@firstSearchResult");
        //.Verify search results using function in npmSearchResults.js file
      client
        .end();
  },

  'npm can search for nightwatch': (client) => {

      const homePage = client.page.npmHome();
      const npmSearchResults = client.page.npmSearchResults();

    homePage
        .navigate()
        //.navigate corresponds to module.exports and loads URL function in npmHome
        .isLoaded()
        //.isLoaded corresponds to the isLoaded const in npmHome and looks for last object to be loaded on page
        .search('Nightwatch')
        //.search calls search function in npmHome.js file
      npmSearchResults
        .isLoaded()
        .assert.elementPresent("@firstSearchResult");
        //.Verify search results using function in npmSearchResults.js file
      client
        .end();
    },

  'npm, negative test - searches for false value': (client) =>{

      const homePage = client.page.npmHome();
      const npmSearchResults = client.page.npmSearchResults();

    homePage
      .navigate()
      .isLoaded()
      .search('Jessica Simpson');
    npmSearchResults
      .isLoaded()
      .assert.elementNotPresent("@firstSearchResult");
      //.Verify search results using function in npmSearchResults.js file
    client
      .end();
  }
};

//search test: chance
//search test: nightwatch
//search test: negative test
