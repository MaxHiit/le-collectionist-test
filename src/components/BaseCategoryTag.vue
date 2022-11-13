<template>
  <p class="category-tag">{{ getGenreName(genre) }}</p>
</template>

<script setup>
import { useMovieStore } from "@/stores/moviesStore";
// eslint-disable-next-line no-unused-vars
const props = defineProps(["genre"]);

const movieStore = useMovieStore();
const getGenreName = movieStore.getGenreName;
</script>

<style scoped>
.category-tag {
  background-color: theme("backgroundColor.green-primary");
  color: theme("colors.color-text");
  padding: 0.3rem;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 5px;
  font-size: 10px;
}
</style>
