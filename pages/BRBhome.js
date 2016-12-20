'use strict';

const commands = {
  isLoaded() {
      return this;
      .waitForElementVisible('@BRBdisclaimer', 5000);
  }

};

module.exports = {
  url: function () {
    return "https://www.npmjs.com/";
  },
  commands: [commands],
  elements: {

  BRBdisclaimer: 'p:last-child',

  }
};
