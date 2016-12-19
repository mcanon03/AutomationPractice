//David's code for his testing -- change to match BRB

'use strict';

const commands = {
  isLoaded () {
    return this
      .waitForElementVisible('@npmLovesYou', 5000);
  },
  search (searchTerm) {
    return this
    .setValue('@searchBar', searchTerm)
    .click('@searchButton');
  }
  };

module.exports = {
  url: function () {
    return "https://www.npmjs.com/";
  },
  commands: [commands],
  elements: {

  searchBar: '#site-search',

  searchButton: 'button',
  npmLovesYou: '.npm-loves-you'

  }
};
