<if>
  <yield/>
  <script>
    this.ok = false
    this.skip = false
    this.on('update', function() {
      this.ok = !!opts.cond
    })
  </script>
</if>

<then>
  <virtual if={ show }><yield/></virtual>
  <script>
    this.on('update', function() {
      this.show = !this.parent.skip && this.parent.ok
    })
  </script>
</then>

<else>
  <virtual if={ show }><yield/></virtual>
  <script>
    this.on('update', function() {
      this.show = !this.parent.skip && !this.parent.ok
    })
  </script>
</else>

<elseif>
  <yield/>
  <script>
    this.ok = false
    this.skip = false
    this.on('update', function() {
      this.skip = this.parent.ok
      this.ok = !!opts.cond
    })
  </script>
</elseif>
