<template>
  <div class="w-full md:w-48 sticky top-[64px] md:fixed z-10 bg-black">
    <h3 class="px-6 md:px-12 text-2xl font-bold uppercase">Filter</h3>
    <ul
      class="category-navbar-list md:w-48 flex flex-row md:flex-col md:fixed gap-4 h-auto overflow-auto md:overflow-y-auto md:overflow-x-hidden md:top-[96px] md:bottom-0 py-4 px-6 md:pl-12 md:pr-2"
    >
      <template v-for="(genre, index) in getGenresList" :key="index">
        <FilterCategoryItem :genre="genre" :index="index" />
      </template>
    </ul>
  </div>
</template>

<script setup>
import FilterCategoryItem from "@/components/list/FilterCategoryItem.vue";
import { useMovieStore } from "@/stores/moviesStore";
import { computed } from "vue";

const movieStore = useMovieStore();
const getGenresList = computed(() => movieStore.genresList);
</script>

<style scoped>
.category-navbar-list {
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
}

.category-navbar-list::-webkit-scrollbar {
  display: none; /* for Chrome, Safari, and Opera */
  width: 0;
  height: 0;
}
</style>
