describe('Application specs', function() {

  before(function() {
    // create mounting points
    var html = document.createElement('game')
    document.body.appendChild(html)
  })

  it('mounts the tag', function() {
    var tag = riot.mount('game')
    expect(document.querySelector('game > board'))
      .to.not.be.null
    tag[0].unmount(true)
  })

  it('displays the initial status', function() {
    var tag = riot.mount('game')
    expect(document.querySelector('.game-info > div').textContent)
      .to.equal('Next Player: X')
  })

  it('displays 9 squares', function() {
    var tag = riot.mount('game')
    expect(document.querySelectorAll('game > board > square'))
      .to.have.length(9)
  })

  it('fills square with X on first click', function() {
    var tag = riot.mount('game')
    var square = document.querySelectorAll('game > board > square')[0]
    var button = square.querySelector('button')
    button.click()
    expect(button.textContent)
      .to.equal('X')
  })

  it('fills square with O on second click', function() {
    var tag = riot.mount('game')
    var square1 = document.querySelectorAll('game > board > square')[0]
    var square2 = document.querySelectorAll('game > board > square')[1]
    var button1 = square1.querySelector('button')
    var button2 = square2.querySelector('button')
    button1.click()
    button2.click()
    expect(button2.textContent)
      .to.equal('O')
  })

  it('adds game history', function() {
    var tag = riot.mount('game')
    var square = document.querySelectorAll('game > board > square')[0]
    var button = square.querySelector('button')
    button.click()
    var history = document.querySelectorAll('game > .game-info > ol > li')
    expect(history)
      .to.have.length(2)
  })

  it('goes to game start', function() {
    var tag = riot.mount('game')
    var square = document.querySelectorAll('game > board > square')[0]
    var button = square.querySelector('button')
    button.click()
    var history = document.querySelectorAll('game > .game-info > ol > li')[0]
    var reset = history.querySelector('button')
    reset.click()
    expect(document.querySelector('.game-info > div').textContent)
      .to.equal('Next Player: X')
  })

})
