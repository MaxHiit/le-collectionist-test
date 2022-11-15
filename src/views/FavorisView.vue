<template>
  <div v-if="loading">
    <Loader />
  </div>
  <template v-else>
    <div class="px-6 py-6 md:pr-12 w-full">
      <BaseMovieListLayout
        v-if="userFavMovies.length > 0"
        :moviesList="userFavMovies"
      />

      <BaseMessage v-else message="You don't have any favorites yet" />
    </div>
  </template>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useMovieStore } from "@/stores/moviesStore";
import BaseMovieListLayout from "@/components/BaseMovieListLayout.vue";
import BaseMessage from "@/components/BaseMessage.vue";
import Loader from "@/components/LoaderComponent.vue";

const movieStore = useMovieStore();
const { userFavMovies, loading } = storeToRefs(movieStore);
</script>
