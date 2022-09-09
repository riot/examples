interface Window {
  __INITIAL_STATE__: {
    initialRoute: string
    base: string
    routes: Record<string, {
      path: string
      label: string
      component: string
    }>
  }
}
