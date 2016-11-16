<if>
  <yield/>
  <script>
    this.ok = false
    this.skip = false
    check()
    this.on('update', check)
    function check () { this.ok = !!opts.cond }
  </script>
</if>

<then>
  <virtual if={ show }><yield/></virtual>
  <script>
    check()
    this.on('update', check)
    function check () { this.show = !this.parent.skip && this.parent.ok }
  </script>
</then>

<else>
  <virtual if={ show }><yield/></virtual>
  <script>
    check()
    this.on('update', check)
    function check () { this.show = !this.parent.skip && !this.parent.ok }
  </script>
</else>

<elseif>
  <yield/>
  <script>
    this.ok = false
    this.skip = false
    check()
    this.on('update', check)
    function check () {
      this.skip = this.parent.ok
      this.ok = !!opts.cond
    }
  </script>
</elseif>
