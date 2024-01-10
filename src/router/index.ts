import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("@/layouts/DefaultLayout.vue"),
      children: [
        {
          name: "explore",
          path: "/",
          component: () => import("@/views/explore/Explore.vue"),
        },
        {
          name: "detail_anime",
          path: "/detail/:anime_id",
          component: () => import("@/views/explore/Detail.vue"),
        },
      ],
    },
    {
      path: "/auth",
      component: () => import("@/layouts/BlankLayout.vue"),
      children: [
        {
          name: "login",
          path: "/login",
          component: () => import("@/views/auth/Login.vue"),
        },
      ],
    },
    {
      path: "/:catchAll(.*)*",
      component: () => import("@/views/system/Error404.vue"),
    },
  ],
});

export default router;
