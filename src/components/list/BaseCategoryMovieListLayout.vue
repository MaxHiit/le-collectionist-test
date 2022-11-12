<template>
  <div class="md:ml-[224px] px-6 py-6 md:pr-12 w-full">
    <TransitionGroup
      name="list"
      tag="div"
      v-if="moviesStore.filteredMovies().length > 0"
      class="w-full grid grid-cols-5 auto-rows-max gap-9"
    >
      <BaseMovieCard
        v-for="(movie, index) in displayMovies"
        :key="index"
        :movie="movie"
      />
    </TransitionGroup>

    <div v-else class="flex items-center justify-center">
      <p class="text-lg uppercase font-semibold">
        {{ filterMessage }}
      </p>
    </div>
  </div>
</template>

<script setup>
import BaseMovieCard from "../BaseMovieCard.vue";
import { useMovieStore } from "../../stores/MoviesStore";
import { computed, ref, onBeforeUpdate } from "vue";

const moviesStore = useMovieStore();
const filterMessage = ref("");

const displayMovies = computed(() => moviesStore.filteredMovies());

onBeforeUpdate(() => {
  if (!moviesStore.filteredMovies().length) {
    filterMessage.value = "no result";
  } else {
    filterMessage.value = "";
  }
});
</script>

<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
