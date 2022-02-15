const IS_MOUNTED = Symbol()

const withHook = setup => () => {
  const hooks = uhooks.hooked((props, component) => {
    Object.assign(component, setup(props))
    if (component[IS_MOUNTED]) component.update()
  })

  return {
    onBeforeMount(props) {
      hooks(props, this)
      this[IS_MOUNTED] = true
    }
  }
}
