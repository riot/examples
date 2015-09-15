<live-editor>

  <!-- the empty line causes editor start from second line (on purpose) -->
  <section class="editor"></section>

  <iframe src="stage.html" name="preview" class="preview"></iframe>

  <script>
    var self = this

    self.on('mount', function() {
      var editor = ace.edit(self.root.querySelector('.editor'))
      var doc = editor.getSession()

      editor.setTheme('ace/theme/monokai')
      doc.setMode('ace/mode/html')
      doc.setTabSize(2)
      editor.session.setUseWorker(false)

      doc.on('change', function(e) { mount(doc.getValue()) })
      get(opts.src, function(tag) { doc.setValue(tag) })
    })

    function mount(tag) {
      // reload the iframe
      self.preview.src = self.preview.src
      self.preview.onload = function() {
        self.preview.contentWindow.postMessage(tag, '*')
      }
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

</live-editor>
