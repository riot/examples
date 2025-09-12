declare module '*.riot' {
  import { RiotComponentWrapper } from 'riot'

  const componentWrapper: RiotComponentWrapper<any>

  export default componentWrapper
}
