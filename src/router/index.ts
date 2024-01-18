/*
 * @Author: SunFulin
 * @Date: 2023-10-09 09:34:06
 * @LastEditTime: 2023-10-18 17:16:39
 * @LastEditors: Dragon
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
// 路由类型
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("../appLayout/index.vue"),
    redirect:'/voiceBroadcast',
    children: [
      {
        path: "/voiceBroadcast",
        component: () => import("../views/voiceBroadcast.vue"),
      },
      {
        path: "/tst",
        component: () => import("../views/tst.vue"),
      },
      {
        path: "/draggable",
        component: () => import("../views/draggable/index.vue"),
      }
    ],
  },
];
// 创建路由

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: (to, from, savePosition) => {
    if (savePosition) {
      return savePosition;
    }
  },
});

export default router;
