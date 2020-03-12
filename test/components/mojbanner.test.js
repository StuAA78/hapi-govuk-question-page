const Code = require('@hapi/code')
const Lab = require('@hapi/lab')

const MojBanner = require('../../components/mojbanner')

const { expect } = Code
const lab = exports.lab = Lab.script()

const definition = {
  content: 'Test content'
}

lab.experiment('MojBanner', () => {
  let mojBanner
  lab.beforeEach(() => {
    mojBanner = new MojBanner(definition)
  })
  lab.experiment('getViewModel', () => {
    let viewModel
    lab.beforeEach(() => {
      viewModel = mojBanner.getViewModel()
    })
    lab.test('returns content', () => {
      expect(viewModel.content).to.equal('Test content')
    })
  })
})
