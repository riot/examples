<list-item>
  <h4 onclick={ click }>{ title }</h4>

  click(e) {
    e.preventUpdate = true
    this.title = 'Clicked'
    this.update()
  }
</list-item>
