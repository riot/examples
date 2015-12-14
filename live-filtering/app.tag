<app>

  <header>
    <input type="search" value={ keyword } oninput={ input } placeholder="search">
  </header>

  <currency each={ filtered.slice(0, max) } title={ title } price={ price } />

  <footer if={ filtered.length > max }>
    and { filtered.length - max } more currencies
  </footer>

  <script>
    var self = this

    self.max = 15
    self.keyword = ''
    self.filtered = opts.items

    input (e) {
      self.keyword  = e.target.value
      self.filtered = opts.items.filter(function(c) {
        return !self.keyword || c.title.indexOf(self.keyword.toUpperCase()) == 0
      })
    }
  </script>

  <style scoped>
    :scope {
      display: block;
      text-align: center;
      color: #666;
    }
    header {
      background: #72A7EE;
      padding: 2em;
      margin-bottom: 1em;
    }
    footer {
      color: #ccc;
      padding: 1em;
    }
    input[type=search] {
      width: 100%;
      font-size: 2em;
      padding: .5em 0;
      text-align: center;
      outline: none;
      border: 0;
      border-radius: .2em;
      background-color: rgba(255,255,255,.7);
      transition: all .5s;
    }
    input[type=search]:hover,
    input[type=search]:focus {
      background-color: rgba(255,255,255,1);
      box-shadow: 0 1px 5px rgba(0,0,0,.3);
    }
  </style>

</app>
