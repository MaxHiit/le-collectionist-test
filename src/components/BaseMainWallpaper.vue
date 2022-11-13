<template>
  <div class="absolute top-0 left-0 w-screen min-h-screen px-6 md:px-12">
    <MainMovieLayout />
  </div>
  <div
    class="main-slider-bg py-4 px-6 md:px-12 h-[37vh] md:h-[35vh] -bottom-36 md:bottom-0"
  >
    <BaseMovieSlider>
      <template #title>Top 4 recent movie</template>
      <template #slider>
        <div
          class="flex items-center justify-between gap-8 h-[220px] overflow-x-auto px-4"
        >
          <BaseMovieCard
            v-for="(movie, index) in getTopMovies"
            :index="index"
            :key="movie"
            :movie="movie"
            @click="movieStore.updateSelectedMainMovie(index)"
          />
        </div>
      </template>
    </BaseMovieSlider>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import MainMovieLayout from "@/components/MainMovieLayout.vue";
import BaseMovieSlider from "@/components/BaseMovieSlider.vue";
import BaseMovieCard from "@/components/BaseMovieCard.vue";
import { useMovieStore } from "@/stores/moviesStore";

const movieStore = useMovieStore();
const { getTopMovies } = storeToRefs(movieStore);
</script>

<style scoped>
.main-slider-bg {
  background-color: transparent;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5900560907956933) 11%,
    rgba(0, 0, 0, 0.8953782196472339) 28%,
    rgba(0, 0, 0, 1) 47%
  );
  background-position: 0 top;
  background-repeat: repeat-x;
  background-size: 100% 100%;
  position: absolute;
  width: 100vw;
}
</style>
