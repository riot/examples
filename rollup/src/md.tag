import marked from 'marked'

<md>
  <script>
    this.root.innerHTML = opts.content ? marked(opts.content) : ''
  </script>

  <style scoped>
    :scope {
      display: block;
    }
  </style>
</md>
