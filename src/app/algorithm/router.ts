import {r0} from './(0.preface)/router'
import {r1} from './(1.base)/router'

interface RouteItem {
  type?: string,
  name?: string,
  component?: any,
  path?: string,
  label?: string
}

export const routers: RouteItem[] = [
  ...r0,
  ...r1,
].map(item => {
  if (item.path) {
    item.path = `/algorithm/${item.path}`
  }
  return item
})