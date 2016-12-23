'use strict'

const commands = {
  isLoaded() {
    return this
      //confirm Review Your Order //top
      .waitForElementVisible('@termsAndConditions', 3000);
  },

  //check service agreement box --> go to next page
}

module.exports = {
  commands: [commands],
  elements: {

    termsAndConditions: '.LegalNoticesModal__checkLabel___1psHV span'
  }
};
