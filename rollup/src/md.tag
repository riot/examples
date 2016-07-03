

<md>
  <script>
    import marked from 'marked'

    this.root.innerHTML = opts.content ? marked(opts.content) : ''
  </script>

  <style scoped>
    :scope {
      display: block;
    }
  </style>
</md>
