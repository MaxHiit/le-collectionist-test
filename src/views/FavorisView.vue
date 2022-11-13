<template>
  <BaseMovieListLayout
    v-if="userFavMovies.length > 0"
    :moviesList="userFavMovies"
  />

  <BaseMessage v-else message="You don't have any favorites yet" />
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useMovieStore } from "@/stores/moviesStore";
import BaseMovieListLayout from "@/components/BaseMovieListLayout.vue";
import BaseMessage from "@/components/BaseMessage.vue";

const movieStore = useMovieStore();
const { userFavMovies } = storeToRefs(movieStore);
</script>

<style></style>
