<app>

  <div class="app">
    <h3>Riot with Redux</h3>

    <p>
        { this.name }
    </p>

    <button onclick={ initialize }>
      Initial fetch
    </button>
  </div>

  <script>
    this.on('mount', () => {
      this.name = this.store.getState().sampleReducer.name
      this.update()
    })

    this.initialize = (e) => {

      let action = {
        type: 'ACTION',
        payload: new Promise((t, c) => {
          setTimeout(() => {
            t()
          }, 1000)

        }) // use AJAX, Axios or other promise execute
      }

      this.store.dispatch(action).then(() => {
        console.log('Promise executed')
        this.name = this.store.getState().sampleReducer.name
        this.update()
      })
    }
  </script>
</app>
