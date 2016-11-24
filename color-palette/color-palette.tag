<color-palette>

  <div
    each={ c in colors }
    style="background: { c }"
    class={ selected: c == value }
    onclick={ click }></div>

  <script>
    var self = this
    var flag = false
    self.value = opts.value || ''
    self.colors = opts.colors || [
      '#edc951',
      '#eb6841',
      '#cc2a36',
      '#4f372d',
      '#00a0b0'
    ]

    click (e) {
      // update root's attr, too
      self.root.value = self.value = e.item.c
      // dispatch an event on DOM
      self.triggerDomEvent('change')
      this.skipSync()
    }

    // set sync event
    self.on('sync', function() {
      self.value = opts.value
    })
  </script>

  <style>
    :scope {
      display: inline-block;
      padding: .5em;
      line-height: 0;
      background: white;
      transition: box-shadow .2s;
    }
    :scope:hover {
      box-shadow: 0 1px 5px rgba(0,0,0,.5);
    }
    div {
      display: inline-block;
      width: 2em;
      height: 2em;
      position: relative;
      cursor: pointer;
      z-index: 1;
      box-sizing: border-box;
      -moz-box-sizing: border-box;
      transition: box-shadow .2s;
    }
    div:hover {
      z-index: 2;
      box-shadow: 0 2px 10px rgba(0,0,0,.5);
    }
    div:hover,
    div.selected {
      border: 3px solid rgba(255,255,255,.7);
    }
  </style>

</color-palette>
