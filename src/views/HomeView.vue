<template>
  <div v-if="loading">
    <Loader />
  </div>
  <MainView v-else />
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useMovieStore } from "@/stores/moviesStore";
import MainView from "@/components/BaseMainWallpaper.vue";
import Loader from "@/components/LoaderComponent.vue";

const movieStore = useMovieStore();
const { loading } = storeToRefs(movieStore);
</script>
