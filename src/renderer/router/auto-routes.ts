/** 自动导入 views 文件夹下所有的 routes.ts 以生成路由 */
const views = require.context('../pages', true, /routes\.ts$/)
const routes: Map<RouterKey, RouteConfig> = new Map()

views.keys().forEach((path) => {
  const conf: RouteConfig | RouteConfig[] = views(path).default
  if (Array.isArray(conf)) {
    conf.forEach((v) => addRouteConfig(v))
  } else {
    addRouteConfig(conf)
  }
})
function addRouteConfig(conf: RouteConfig) {
  routes.set(conf.key, conf)
}
export default routes
