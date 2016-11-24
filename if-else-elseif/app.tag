<app>

  <label><input type="checkbox" checked={ hot } onclick={ click1 }> hot?</label>
  <label if={ !hot }><input type="checkbox" checked={ carbonated } onclick={ click2 }> carbonated?</label>

  <h3>Simple true/false condition</h3>
  <if cond={ hot }>
    <then><p>Hot beverage</p></then>
    <else><p>Cold beverage</p></else>
  </if>

  <h3>Nested condition</h3>
  <if cond={ hot }>
    <then><p>Coffee</p></then>
    <elseif cond={ parent.carbonated }>
      <then><p>Coke</p></then>
      <else><p>Orange Juice</p></else>
    </elseif>
  </if>

  <script>
    this.hot = false
    this.carbonated = false
    click1 () {
      this.hot = !this.hot
    }
    click2 () {
      this.carbonated = !this.carbonated
    }
  </script>

</app>
