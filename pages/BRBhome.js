'use strict';

const commands = {
  isLoaded() {
    return this
      //.expect.element('@BRBtitle').text.to.equal('Blue Ribbon Bags')
      .waitForElementVisible('@BRBdisclaimer', 3000);
  },

  setNumOfPassengers(numSelection) {
    return this
      //working code -- hard coded option
      .waitForElementVisible('@numPassengers', 3000)
      .click('@numPassengers')
      .click("option[value='"+numSelection+"']")
      .click('@selectButton')
  }
};

module.exports = {
  url: function () {
    return "http://dev.tsxstore.com/tsp/blue-ribbon-bags?accessToken=21233859363b554";
  },
  commands: [commands],
  elements: {

  //code that works
  //Warning: found X elements for selector..Only the first one will be selected
  //use :last-child OR :last-of-type ( use > parent direction?)
  BRBdisclaimer: 'p',

  //TO DO: depending on service type, specify nth selection field
  numPassengers: 'select[id=numPassengers]',
  selectButton: 'button'

  }
};
