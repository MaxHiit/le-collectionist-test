<template>
  <div v-if="loading">
    <Loader />
  </div>
  <div v-else class="flex flex-col md:flex-row">
    <BaseFilterCategoryNav />
    <div class="md:ml-[224px] px-6 py-6 md:pr-12 w-full" ref="scrollComponent">
      <BaseMovieListLayout
        :moviesList="getFilterMovie"
        v-if="getFilterMovie.length > 0"
      />
      <BaseMessage v-else message="no result" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { storeToRefs } from "pinia";
import { useMovieStore } from "@/stores/moviesStore";
import BaseFilterCategoryNav from "@/components/list/BaseFilterCategoryNav.vue";
import BaseMovieListLayout from "@/components/BaseMovieListLayout.vue";
import BaseMessage from "@/components/BaseMessage.vue";
import Loader from "@/components/LoaderComponent.vue";

const movieStore = useMovieStore();
const { getFilterMovie, loading } = storeToRefs(movieStore);

const scrollComponent = ref(null);

const handleScroll = () => {
  const el = scrollComponent.value;
  if (el?.getBoundingClientRect().bottom == window.innerHeight) {
    movieStore.updatePopularMovies();
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.addEventListener("scroll", handleScroll);
});
</script>
