<template>
  <div class="flex flex-col md:flex-row">
    <BaseFilterCategoryNav />
    <BaseMovieListLayout
      v-if="getFilterMovie.length > 0"
      :moviesList="getFilterMovie"
    />
    <BaseMessage v-else message="no result" />
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useMovieStore } from "@/stores/moviesStore";
import BaseFilterCategoryNav from "@/components/list/BaseFilterCategoryNav.vue";
import BaseMovieListLayout from "@/components/BaseMovieListLayout.vue";
import BaseMessage from "@/components/BaseMessage.vue";

const movieStore = useMovieStore();
const { getFilterMovie } = storeToRefs(movieStore);
</script>
