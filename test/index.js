import Chaffle from '../src/chaffle'

describe('Chaffle', () => {
  before(() => {
    document.body.innerHTML = window.__html__['test/fixtures/fixture.html']
  })

  after(() => {
    document.body.innerHTML = ''
  })

  describe('type of options', () => {
    it('lang', (done) => {
      const element = document.querySelectorAll('.default')
      Array.prototype.forEach.call(element, function (el) {
        const chaffle = new Chaffle(el)
        expect(chaffle.options.lang).to.be.a('string')
        done()
      })
    })

    it('speed', (done) => {
      const element = document.querySelectorAll('.default')
      Array.prototype.forEach.call(element, function (el) {
        const chaffle = new Chaffle(el)
        expect(chaffle.options.speed).to.be.a('number')
        done()
      })
    })

    it('delay', (done) => {
      const element = document.querySelectorAll('.default')
      Array.prototype.forEach.call(element, function (el) {
        const chaffle = new Chaffle(el)
        expect(chaffle.options.delay).to.be.a('number')
        done()
      })
    })
  })

  describe('data options', () => {
    it('lang', (done) => {
      const element = document.querySelectorAll('.dataOpt')
      Array.prototype.forEach.call(element, function (el) {
        const chaffle = new Chaffle(el)
        expect(chaffle.options.lang).to.equal('ja')
        done()
      })
    })

    it('speed', (done) => {
      const element = document.querySelectorAll('.dataOpt')
      Array.prototype.forEach.call(element, function (el) {
        const chaffle = new Chaffle(el)
        expect(chaffle.options.speed).to.equal(100)
        done()
      })
    })

    it('delay', (done) => {
      const element = document.querySelectorAll('.dataOpt')
      Array.prototype.forEach.call(element, function (el) {
        const chaffle = new Chaffle(el)
        expect(chaffle.options.delay).to.equal(200)
        done()
      })
    })
  })
})
