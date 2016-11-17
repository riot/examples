<if>
  <yield/>
  <script>
    var self = this
    self
      .on('before-mount', check)
      .on('update', check)

    function check () {
      self.ok = false
      self.ok = !!opts.cond
    }
  </script>
</if>

<then>
  <virtual if={ !parent.skip && parent.ok }><yield/></virtual>
</then>

<else>
  <virtual if={ !parent.skip && !parent.ok }><yield/></virtual>
</else>

<elseif>
  <yield/>
  <script>
    var self = this
    self
      .on('before-mount', check)
      .on('update', check)

    function check () {
      self.skip = self.parent.ok
      self.ok = !!opts.cond
    }
  </script>
</elseif>
