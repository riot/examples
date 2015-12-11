<app>

  <color-palette value={ color } onchange={ change } />

  <p>Click the color.</p>

  <script>
    var self = this
    self.color = ''

    change (e) {
      self.color = e.target.value
      document.body.style.backgroundColor = self.color
    }
  </script>

</app>
