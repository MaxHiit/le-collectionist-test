<template>
  <div class="absolute top-0 left-0 z-0 w-screen h-screen overlay">
    <img :src="movieStore.getImage(getMainMovie.backdrop_path)" alt="" />
  </div>
  <div class="pt-16 md:pt-24 w-full max-w-7xl h-auto">
    <h1 class="main-title uppercase mb-4 font-bold leading-[6rem]">
      {{ getMainMovie.title }}
    </h1>
    <div class="flex flex-col my-8">
      <div class="flex items-center gap-5 mb-2">
        <BaseCategoryTag
          v-for="(genre, index) in getMainMovie.genre_ids"
          :genre="genre"
          :key="index + genre"
          :index="index"
        />
      </div>
      <p class="text-xl my-2 main-desc">{{ getMainMovie.overview }}</p>
      <p class="text-xl">{{ getMainMovie.release_date }}</p>
    </div>
    <div class="flex items-center">
      <!-- 
        // FIXME 
        when i add the router link on the button i have an error "Missing required param "id" " but i don't know why if you have an explanation?
      -->
      <!-- <router-link :to="{ name: 'movieView', params: { id: getMainMovie.id } }"> -->
      <button
        class="rounded-3xl px-10 py-2 bg-purple-500 hover:bg-purple-800 hover:scale-110 duration-300 ease-in-out"
      >
        <span class="uppercase">voir plus</span>
      </button>
      <!-- </router-link> -->
      <button
        :title="
          getMainMovie.isFav ? 'delete from favorites' : 'add to favorites'
        "
        class="rounded-full border-2 p-2 ml-5 hover:border-green-primary hover:bg-green-primary hover:scale-110 duration-300 ease-in-out"
        @click="movieStore.updateFavMovie(getMainMovie)"
      >
        <MinusIcon class="h-6 w-6" v-if="getMainMovie.isFav" />
        <PlusIcon class="h-6 w-6" v-else />
      </button>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import BaseCategoryTag from "@/components/BaseCategoryTag.vue";
import { useMovieStore } from "@/stores/moviesStore";
import { PlusIcon, MinusIcon } from "@heroicons/vue/24/solid";

const movieStore = useMovieStore();

const { getMainMovie } = storeToRefs(movieStore);
</script>

<style>
.main-title {
  font-size: calc(2rem + (120 - 48) * ((100vw - 375px) / (1980 - 375)));
}

.main-desc {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
