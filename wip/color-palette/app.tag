<app style="background: { color }">

  <color-palette value={ color } onchange={ change } />

  <p>Click the color.</p>

  <script>
    var self = this
    self.color = ''

    change (e) {
      self.color = e.target.value
    }
  </script>

  <style>
    :scope {
      position: absolute;
      top: 0; right: 0; bottom: 0; left: 0;
      padding: 1em;
      text-align: center;
      background: #eee;
    }
  </style>

</app>
