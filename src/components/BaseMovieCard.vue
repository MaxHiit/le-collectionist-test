<template>
  <div
    ref="movieRef"
    class="movie-card-container overflow-hidden min-w-[300px] w-full h-[200px] rounded-md border-2 border-white relative cursor-pointer hover:border-[#17e444] ease-in-out duration-300 hover:scale-105"
  >
    <img
      :src="movieStore.getImage(movie.poster_path)"
      alt=""
      class="rounded-md"
    />
    <div
      class="movie-card-info absolute -bottom-32 p-3 w-full bg-[#050505de] rounded-b-md"
    >
      <router-link :to="{ name: 'movieView', params: { id: movie.id } }">
        <h3 class="text-base font-bold capitalize pb-3">{{ movie.title }}</h3>
        <div class="flex items-center gap-5 mb-2">
          <BaseCategoryTag
            v-for="(genre, index) in displayThreeGenre(movie.genre_ids)"
            :genre="genre"
            :key="index"
            :index="index"
          />
        </div>
      </router-link>
    </div>
    <BaseFavorisButton :movieItem="movie" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import BaseCategoryTag from "./BaseCategoryTag.vue";
import BaseFavorisButton from "./BaseFavorisButton.vue";
import { useMovieStore } from "@/stores/moviesStore";
import { storeToRefs } from "pinia";

const props = defineProps(["movie"]);
const movieRef = ref("");

const movieStore = useMovieStore();
const { displayThreeGenre } = storeToRefs(movieStore);
</script>

<style scoped>
.movie-card-container:hover .movie-card-info {
  bottom: 0;
  transition: bottom 300ms ease-in-out;
}
</style>
