<app>
  <md content={ content } />

  <script>
    const name = 'Rollup'
    this.content = `Hello **${ name }**!`
  </script>

  <style scoped>
    :scope {
      display: block;
    }
  </style>
</app>
