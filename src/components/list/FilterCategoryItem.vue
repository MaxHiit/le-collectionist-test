<template>
  <li
    ref="itemRef"
    class="px-4 py-1 md:pr-10 md:py-2 min-w-max md:min-w-full rounded-md md:rounded-r-2xl md:rounded-l-none hover:bg-green-light hover:scale-110 cursor-pointer ease-in-out duration-300 flex items-center md:items-baseline justify-center md:justify-start"
    @click="movieStore.updateFilterChoice(genre, itemRef)"
  >
    <span class="font-bold uppercase text-sm">{{ genre.name }}</span>
  </li>
</template>

<script setup>
import { ref } from "vue";
import { useMovieStore } from "@/stores/moviesStore";
// eslint-disable-next-line no-unused-vars
const props = defineProps(["genre", "index"]);
const movieStore = useMovieStore();
const itemRef = ref("");
</script>

<style>
.filter-item--active {
  background-color: theme("backgroundColor.green-light");
}
</style>
