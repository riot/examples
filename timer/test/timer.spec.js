import Timer from '../timer.riot'
import {expect} from 'chai'
import {component} from 'riot'

describe('Application specs', function() {
  it('mounts the tag', function() {
    const tag = component(Timer)(document.createElement('div'))

    expect(tag.$('p').textContent).to.be.equal('Seconds Elapsed: 0')

    tag.unmount()
  })

  it('mounts the tag with options', function() {
    const tag = component(Timer)(document.createElement('div'), {
      start: 100
    })

    expect(tag.$('p').textContent).to.be.equal('Seconds Elapsed: 100')

    tag.unmount()
  })

  it('counts up the timer', function(done) {
    const tag = component(Timer)(document.createElement('div'))
    setTimeout(function() {
      expect(tag.$('p').textContent).to.be.equal('Seconds Elapsed: 1')

      tag.unmount()
      done()
    }, 1000)
  })
})
