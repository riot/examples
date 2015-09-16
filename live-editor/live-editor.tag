<live-editor>

  <!-- the empty line causes editor start from second line (on purpose) -->
  <section></section>

  <iframe src="stage.html" name="preview" scrolling="no"></iframe>

  <script>
    var self = this

    self.on('mount', function() {
      var editor = ace.edit(self.root.querySelector('section'))
      var doc = editor.getSession()

      editor.setTheme('ace/theme/monokai')
      doc.setMode('ace/mode/html')
      doc.setTabSize(2)
      editor.session.setUseWorker(false)

      doc.on('change', function(e) { mount(doc.getValue()) })
      if (window.location.hash)
        doc.setValue(decodeURIComponent(window.location.hash.substring(1)))
      else
        get(opts.src, function(tag) { doc.setValue(tag) })
    })

    function mount(tag) {
      // reload the iframe
      self.preview.src = self.preview.src
      self.preview.onload = function() {
        window.location.hash = tag
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

  <style scoped>
    :scope {
      display: block;
      height: 100vh;
      overflow: hidden;
    }
    iframe {
      display: inline-block;
      vertical-align: top;
      padding-left: 1em;
      color: #333;
      border: none;
      width: 45%;
      height: 100vh;
    }
    section {
      height: 300px;
    }
    @media (min-width: 500px) {
      section {
        height: 100vh;
        display:inline-block;
        width: 50%;
      }
    }
  </style>

</live-editor>
