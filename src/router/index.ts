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
          name: "favorites",
          path: "/favorites",
          component: () => import("@/views/favorites/Favorites.vue"),
        },
        {
          name: "reviews",
          path: "/reviews",
          component: () => import("@/views/reviews/Reviews.vue"),
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

export default router;
