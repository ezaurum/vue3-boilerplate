// Vue Router has no default export
import * as VueRouter from "vue-router"

import routes from "@/router/routes"

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
})

export default router
