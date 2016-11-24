<app>
  <md content={ content } />

  <script>
    const name = 'Rollup'
    this.content = `Hello **${ name }**!`
  </script>

  <style>
    :scope {
      display: block;
    }
  </style>
</app>
