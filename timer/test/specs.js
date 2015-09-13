describe('Application specs', function() {

  before(function() {
    // create mounting points
    var html = document.createElement('timer')
    document.body.appendChild(html)
  })

  it('mounts the tag', function() {
    var tag = riot.mount('timer')
    expect(document.querySelector('timer > p').textContent)
      .to.be('Seconds Elapsed: 0')
    tag[0].unmount(true)
  })

  it('mounts the tag with options', function() {
    var tag = riot.mount('timer', { start: 100 })
    expect(document.querySelector('timer > p').textContent)
      .to.be('Seconds Elapsed: 100')
    tag[0].unmount(true)
  })

  it('counts up the timer', function(done) {
    var tag = riot.mount('timer')
    setTimeout(function() {
      expect(document.querySelector('timer > p').textContent)
        .to.be('Seconds Elapsed: 1')
      tag[0].unmount(true)
      done()
    }, 1000)
  })

})
