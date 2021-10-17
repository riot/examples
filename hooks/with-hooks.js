function withHook(setup) {
  return {
    onBeforeMount() {
      this.preventUpdate = true
      this.hooks = uhooks.hooked(() => {
        Object.assign(this, setup(this.props))
        if (!this.preventUpdate) this.update()
      })
      this.hooks()
      this.preventUpdate = false
    },
    onBeforeUpdate() {
      this.preventUpdate = true
      this.hooks()
      this.preventUpdate = false
    }
  }
}
