<game>
  <board squares={current.squares} click={handleClick}></board>
  <div class="game-info">
    <div>{ status }</div>
    <ol if={moves}>
      <li each={moves} key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    </ol>
  </div>
  <script type="text/javascript">
    var tag = this
    tag.history = [{
      squares: Array(9).fill(null)
    }]
    tag.current = tag.history[tag.history.length - 1]
    tag.stepNumber = 0
    tag.xIsNext = true
    tag.status = 'Next Player: ' + (tag.xIsNext ? 'X' : 'O')

    tag.on('update', function() {
      const history = tag.history
      tag.current = history[tag.stepNumber]
      const winner = calculateWinner(tag.current.squares)

      tag.moves = history.map((step, move) => {
        const desc = move ?
          'Go to move #' + move :
          'Go to game start'
        return {
          desc: desc,
          move: move
        }
      })

      if (winner) {
        tag.status = 'Winner: ' + winner
      } else {
        tag.status = 'Next Player: ' + (tag.xIsNext ? 'X' : 'O')
      }
    })

    tag.jumpTo = function(step) {
      tag.update({
        stepNumber: step,
        xIsNext: (step % 2) === 0
      })
    }

    tag.handleClick = function(i) {
      const history = tag.history.slice(0, tag.stepNumber + 1)
      const current = history[history.length - 1]
      const squares = current.squares.slice()
      if (calculateWinner(squares) || squares[i]) {
        return
      }
      squares[i] = tag.xIsNext ? 'X' : 'O'
      tag.update({
        history: history.concat([{
          squares: squares
        }]),
        stepNumber: history.length,
        xIsNext: !tag.xIsNext
      })
    }

    function calculateWinner(squares) {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ]
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i]
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a]
        }
      }
      return null
    }
  </script>
</game>
