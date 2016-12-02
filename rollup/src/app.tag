<app>
  <h1>Hi Riot!</h1>
  <md content={ content } />

  <script>
    const name = 'Rollup'
    this.content = `Hello **${ name }**!`
  </script>

  <style>
    :scope {
      --riot-color: #f04;
      display: block;
    }
    h1 {
      color: var(--riot-color);
      border-bottom: 1px solid var(--riot-color);
    }
  </style>
</app>
