<if>
  <yield/>
  <script>
    this.ok = false
    this.skip = false
    check () { this.ok = !!opts.cond }
    this.on('update', this.check)
    this.check()
  </script>
</if>

<then>
  <virtual if={ show }><yield/></virtual>
  <script>
    check () { this.show = !this.parent.skip && this.parent.ok }
    this.on('update', this.check)
    this.check()
  </script>
</then>

<else>
  <virtual if={ show }><yield/></virtual>
  <script>
    check () { this.show = !this.parent.skip && !this.parent.ok }
    this.on('update', this.check)
    this.check()
  </script>
</else>

<elseif>
  <yield/>
  <script>
    this.ok = false
    this.skip = false
    check () {
      this.skip = this.parent.ok
      this.ok = !!opts.cond
    }
    this.on('update', this.check)
    this.check()
  </script>
</elseif>
