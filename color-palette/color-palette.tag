<color-palette>

  <div
    each={ c in colors }
    style="background: { c }"
    class={ selected: c == parent.value }
    onclick={ click }></div>

  <script>
    var self = this
    var lastValue = opts.value
    self.value = opts.value
    self.colors = [
      '#edc951',
      '#eb6841',
      '#cc2a36',
      '#4f372d',
      '#00a0b0'
    ]

    click (e) {
      /** update root's attr, too */
      self.root.value = self.value = e.item.c

      setTimeout(function() {
        var changeEvent
        if (typeof Event == 'function') { // Standard browsers
          changeEvent = new Event('change')
        } else { // IE 9 ~ 11
          changeEvent = document.createEvent('Event')
          changeEvent.initEvent('change', true, true)
        }
        /** dispatch an event */
        self.root.dispatchEvent(changeEvent)
      }, 0)
    }

    self.on('update', function() {
      /** if value changed by outer tag */
      if (opts.value != lastValue) self.value = lastValue = opts.value
    })
  </script>

  <style scoped>
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
