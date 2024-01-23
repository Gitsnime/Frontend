import { createRouter, createWebHistory } from "vue-router";
import { authStore } from "@/stores/Auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("@/layouts/DefaultLayout.vue"),
      meta: { requiresAuth: true },
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
        {
          name: "favorites",
          path: "/favorites",
          component: () => import("@/views/explore/Favorites.vue"),
        },
        {
          name: "my_reviews",
          path: "myreviews",
          component: () => import("@/views/explore/MyReviews.vue"),
        },
      ],
    },
    {
      path: "/auth",
      component: () => import("@/layouts/AuthLayout.vue"),
      children: [
        {
          name: "login",
          path: "/login",
          component: () => import("@/views/auth/LoginRegister.vue"),
        },
      ],
    },
    {
      path: "/:catchAll(.*)*",
      component: () => import("@/views/system/Error404.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = authStore().getToken();
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth && !isAuthenticated) {
    next("/login");
  } else next();
});

export default router;
