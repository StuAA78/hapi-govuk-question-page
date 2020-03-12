const { Component } = require('.')

class MojBanner extends Component {
  getViewModel () {
    return {
      content: this.content,
      type: this.bannerType
    }
  }
}

module.exports = MojBanner
