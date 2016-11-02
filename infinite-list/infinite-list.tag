<infinite-list onscroll={ onscroll }>

  <h3>{ title }</h3>
  
  <list-item each={ items_to_render }></list-item>

  this.title           = opts.title
  this.items           = opts.items || []
  this.items_to_render = this.items.slice(0, 250)
  
  onscroll(e) {
   
    var itemheight  = 72  // Height of item
    var chunksize   = 250	// Number of items to render
    var chunk       = Math.floor(e.target.scrollTop / (chunksize * itemheight * 0.95)) 

    if(chunk > (this.lastchunk || 0)) {
      this.items_to_render  = this.items.slice(0, chunksize * (chunk + 1))
      this.lastchunk  = chunk
    } else {
       e.preventUpdate = true
    }
  }

</infinite-list>
