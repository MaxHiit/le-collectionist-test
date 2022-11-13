<script setup>
import { useMovieStore } from "@/stores/moviesStore";
import Navbar from "@/components/Navbar.vue";

const movieStore = useMovieStore();

movieStore.fetchPopularMovies();
movieStore.fetchGenresList();
</script>

<template>
  <Navbar />
  <RouterView />
</template>

<style scoped></style>
