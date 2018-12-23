const { extend } = riot.util.misc

// find the top most parent tag
function topParent(tag) {
  if (!tag.parent) return tag
  return topParent(tag.parent)
}

const inheritFromParentMixin = {
  init(opts, parent) {
    parent = parent || topParent(this.parent)
    
    for (let prop in parent) {
      let val = parent[prop]
      if (prop === 'opts') val = extend({}, val, this.opts)
      
      // copy all the parent properties
      this[prop] = typeof val === 'function' ? function(e, ...args) {
        e.preventUpdate = true
        val.apply(parent, [e, ...args]) 
        // sync the child with the parent
        inheritFromParentMixin.init.apply(this, [opts, parent])
        // call the update only on the parent tag
        parent.update()
      } : val
    }
  }
}