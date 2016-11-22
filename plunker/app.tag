<app>
  <p>Now opening Plunker...</p>

  <form ref="form" method="post" action="http://plnkr.co/edit/?p=preview">
    <input type="hidden" name="description" value={ manifest.title || 'Riot Example' }>
    <input type="hidden" name="private" value="true">
    <input type="hidden" name="tags[0]" value="riotjs">
    <input type="hidden" name="tags[1]" value="example">
    <input each={ files } type="hidden" name="files[{ name }]" value={ content }>
  </form>

  <script>
    var self = this
    var query = location.search
      .replace(/^\?/, '')
      .split('&').reduce(function(obj, current){
        var arr = current.split('=')
        if (arr[0]) obj[arr[0]] = arr[1]
        return obj
      }, {})

    self.files = []
    self.manifest = {}

    get('../' + query.app + '/plunker.json')
      .then(function(text) {
        self.manifest = JSON.parse(text)
        return Promise.all(self.manifest.files.map(function(name) {
          return get('../' + query.app + '/' + name)
            .then(function(content){
              return { name: name, content: content }
            })
        }))
      })
      .then(function(files) {
        self.files = files
        self.one('updated', function() { self.refs.form.submit() })
        self.update()
      })

    function get(url) {
      return new Promise(function(resolve, reject) {
        var req = new XMLHttpRequest()
        req.onreadystatechange = function() {
          if (req.readyState == 4
            && (req.status == 200 || (!req.status && req.responseText.length)))
            resolve(req.responseText)
        }
        req.open('GET', url, true)
        req.send('')
      })
    }
  </script>

  <style>
    :scope {
      display: block;
      font-family: sans-serif;
      margin: 0;
      padding: 1em;
      text-align: center;
      color: #ccc;
    }
    form {
      display: none;
    }
  </style>
</app>
