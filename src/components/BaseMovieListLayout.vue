<template>
  <TransitionGroup
    name="list"
    tag="div"
    class="w-full grid grid-cols-5 auto-rows-max gap-9 md:gap-12"
  >
    <BaseMovieCard
      v-for="(movie, index) in moviesList"
      :key="index"
      :index="index"
      :movie="movie"
    />
  </TransitionGroup>
</template>

<script setup>
import BaseMovieCard from "@/components/BaseMovieCard.vue";

defineProps(["moviesList"]);
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
