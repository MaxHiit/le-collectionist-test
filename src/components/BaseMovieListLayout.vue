<template>
  <div class="md:ml-[224px] px-6 py-6 md:pr-12 w-full">
    <TransitionGroup
      name="list"
      tag="div"
      class="w-full grid grid-cols-5 auto-rows-max gap-9 md:gap-11"
    >
      <BaseMovieCard
        v-for="(movie, index) in moviesList"
        :key="index"
        :index="index"
        :movie="movie"
      />
    </TransitionGroup>
  </div>
</template>

<script setup>
import BaseMovieCard from "@/components/BaseMovieCard.vue";

const props = defineProps(["moviesList"]);
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
