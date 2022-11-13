import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ListView from "@/views/ListView.vue";
import MovieView from "@/views/MovieView.vue";
import FavorisView from "@/views/FavorisView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/movies",
      name: "moviesList",
      component: ListView,
    },
    {
      path: "/movies/:id",
      name: "movieView",
      component: MovieView,
      props: true,
    },
    {
      path: "/favoris",
      name: "favorisView",
      component: FavorisView,
      props: true,
    },
  ],
});

export default router;
