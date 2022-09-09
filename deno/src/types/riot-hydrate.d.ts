declare module '@riotjs/hydrate' {
  import { RiotComponent, RiotComponentWrapper} from 'riot'
  export default function <Props, State, Component = RiotComponent<Props, State>>(wrapper: RiotComponentWrapper<Component>): (
    el: Element,
    initialProps?: Props
  ) => Component
}
