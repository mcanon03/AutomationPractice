'use strict'

const commands = {
  isLoaded() {
    return this
      //.expect.element('@BRBtitle').text.to.equal('Blue Ribbon Bags')
      .waitForElementVisible('@nextStep', 3000);
  },

}

module.exports = {
  commands: [commands],
  elements: {

    nextStep: 'button'
  }
};
