'use strict';

const commands = {
  isLoaded() {
    return this
      //.expect.element('@BRBtitle').text.to.equal('Blue Ribbon Bags')
      .waitForElementVisible('@BRBdisclaimer', 3000);
  },

  setNumOfPassengers(numSelection) { //for testing = only for Platinum Service (index 1)
    return this
      //.waitForElementVisible('@numPassengers', 3000)
      .click('@numPassengers')
      .click("option[value='"+numSelection+"']")
      //assert selecting numOf Passengers is registered
      .click('@selectButton')
  }
};

module.exports = {
  url: function () {
    return "http://dev.tsxstore.com/tsp/blue-ribbon-bags?accessToken=21233859363b554";
  },

  commands: [commands],

  elements: {

  // Last line of the page
  BRBdisclaimer: '.TSPView__overview__section___16xnx:last-child p:last-child',

  //TO DO: depending on service type, specify nth selection field
  numPassengers: '.InsuranceOffer__card___43A7V:nth-of-type(2) #numPassengers',
  selectButton: '.InsuranceOffer__card___43A7V:nth-of-type(2) button'


  }
};
