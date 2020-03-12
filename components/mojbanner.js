const { Component } = require('.')

class MojBanner extends Component {
  getViewModel () {
    return {
      content: this.content
    }
  }
}

module.exports = MojBanner
