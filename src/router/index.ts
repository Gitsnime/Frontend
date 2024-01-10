import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Home.vue"),
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
        {
          name: "register",
          path: "/register",
          component: () => import("@/views/auth/Register.vue"),
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
