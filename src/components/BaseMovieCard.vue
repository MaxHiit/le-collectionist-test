<template>
  <div
    class="movie-card-container overflow-hidden min-w-[300px] w-full h-[200px] rounded-md border-2 border-white relative cursor-pointer hover:border-[#17e444] ease-in-out duration-300 hover:scale-105"
  >
    <img :src="getImage(movie.backdrop_path)" alt="" class="rounded-md" />
    <div
      class="movie-card-info absolute -bottom-32 p-3 w-full bg-[#050505de] rounded-b-md"
    >
      <h3 class="text-base font-bold capitalize pb-3">{{ movie.title }}</h3>
      <div class="flex items-center gap-5 mb-2">
        <BaseCategoryTag
          v-for="(category, index) in showOnlyThreeCategoryArr"
          :categoryTitle="category"
          :key="index + category"
          :index="index"
        />
      </div>
    </div>
    <BaseFavorisButton :movieItem="movie" />
  </div>
</template>

<script setup>
import { computed } from "vue";
import BaseCategoryTag from "./BaseCategoryTag.vue";
import BaseFavorisButton from "./BaseFavorisButton.vue";

const props = defineProps(["movie"]);

const showOnlyThreeCategoryArr = computed(() =>
  props.movie.categories.slice(0, 3)
);

const getImage = (imagePath) => {
  const urlBase = "https://image.tmdb.org/t/p/original";

  const urlImage = `${urlBase}+${imagePath}`;
  return urlImage;
};
</script>

<style scoped>
.movie-card-container:hover .movie-card-info {
  bottom: 0;
  transition: bottom 300ms ease-in-out;
}
</style>
