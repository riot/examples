<live-editor>

  <section class="preview"></section>
  <section class="editor"></section>

  <script>
    var self = this

    self.on('mount', function() {
      var editor = ace.edit(self.root.querySelector('.editor'))
      var doc = editor.getSession()
      doc.setTabSize(2)
      doc.on('change', function(e) { mount(doc.getValue()) })
      get(opts.src, function(tag) { doc.setValue(tag) })
    })

    function mount(tag) {
      riot.compile(tag)
      riot.mount(self.root.querySelector('.preview'), 'sample')
    }

    function get(url, fn) {
      var req = new XMLHttpRequest()
      req.onreadystatechange = function() {
        if (req.readyState == 4 && (req.status == 200 || (!req.status && req.responseText.length)))
          fn(req.responseText)
      }
      req.open('GET', url, true)
      req.send('')
    }
  </script>

  <style scoped>
    :scoped {
      display: block;
    }
    .preview {
      height: 200px;
      overflow: scroll;
    }
    .editor {
      height: 300px;
    }
  </style>

</live-editor>
