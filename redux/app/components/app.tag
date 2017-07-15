<app>

  <div class="app">
    <h3>Riot with Redux</h3>

    <p>
        { this.store.getState().sampleReducer.name }
    </p>

    <button ref="btn">
      Initial fetch
    </button>
  </div>

  <script>
    this.on('mount', () => {

      this.refs.btn.onclick = () => {

        let action = {
          type: 'ACTION',
          payload: new Promise((t, c) => {
            setTimeout(() => {
              t()
            }, 1000)

          }) // use AJAX, Axios or other promise execut
        }

        this.store.dispatch(action).then(() => {
          console.log('Promise executed')

          this.update()
        })
      }
    })
  </script>
</app>
