<md>
  <script>
    import marked from 'marked'

    this.root.innerHTML = opts.content ? marked(opts.content) : ''
  </script>

  <style>
    :scope {
      display: block;
    }
  </style>
</md>
