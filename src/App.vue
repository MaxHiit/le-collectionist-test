<script setup>
import { onMounted } from "vue";
import { useMovieStore } from "@/stores/moviesStore";
import NavBar from "@/components/NavBar.vue";

const movieStore = useMovieStore();

onMounted(() => {
  movieStore.fetchPopularMovies();
  movieStore.fetchGenresList();
});
</script>

<template>
  <NavBar />
  <RouterView />
</template>
