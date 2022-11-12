<template>
  <button
    :title="movieItem.isFav ? 'delete from favorites' : 'add to favorites'"
    class="p-2 ml-5 absolute top-0 right-0 ease-in-out duration-300 hover:text-red-500 hover:animate-pulse"
    @click="updateUserFavMovie(movieItem)"
  >
    <HeartIcon
      :class="[movieItem.isFav ? 'text-red-500' : 'text-white-500', 'h-6 w-6 ']"
    />
  </button>
</template>

<script setup>
import { HeartIcon } from "@heroicons/vue/24/solid";
import { useMovieStore } from "../stores/MoviesStore";

// eslint-disable-next-line no-unused-vars
const props = defineProps(["movieItem"]);

const moviesStore = useMovieStore();
const updateUserFavMovie = (movie) => moviesStore.updateFavMovie(movie);
</script>
