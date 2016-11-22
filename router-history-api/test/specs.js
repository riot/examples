describe('Application specs', function() {

  before(function() {
    // create mounting points
    var html = document.createElement('app')
    document.body.appendChild(html)
  })

  it('mounts the tag', function() {
    riot.mount('app')
    expect(document.querySelector('article > h1').textContent)
      .to.be('Home')
  })

  it('goes to the url to show another tab', function() {
    route('1')
    expect(document.querySelector('article > h1').textContent)
      .to.be('First')

    route('2')
    expect(document.querySelector('article > h1').textContent)
      .to.be('Second')
  })

})
