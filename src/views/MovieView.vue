<template>
  <div
    class="absolute top-0 left-0 z-0 w-screen h-auto min-h-screen px-6 pt-20 pb-14 md:px-12"
  >
    <div class="absolute top-0 left-0 z-0 w-screen h-full min-h-screen overlay">
      <img :src="movieStore.getImage(singleMovie.backdrop_path)" />
    </div>
    <GoBackButton />
    <div class="pt-10 max-w-4xl">
      <div class="flex gap-10">
        <div
          class="hidden md:block w-[1440px] h-[450px] rounded-md border-2 border-white"
        >
          <img :src="movieStore.getImage(singleMovie.poster_path)" />
        </div>
        <div>
          <h2 class="text-5xl font-bold mb-5">{{ singleMovie.title }}</h2>
          <p class="text-lg font-semibold">{{ singleMovie.overview }}</p>
        </div>
      </div>

      <div class="mt-11">
        <p class="text-2xl font-bold">CAST</p>
        <div class="flex flex-wrap max-w-4xl gap-x-16 gap-y-5 pt-4">
          <template v-for="(persn, index) in getMovieIdCast" :key="index">
            <div class="flex items-center gap-2 min-w-[240px]">
              <img
                :src="movieStore.getImage(persn.profile_path)"
                :alt="persn.name"
                class="rounded-full border-2 border-white max-w-[60px] max-h-[60px]"
              />

              <p class="text-lg font-semibold">
                {{ persn.name }}
              </p>
            </div>
          </template>
        </div>
      </div>

      <div class="mt-11">
        <p class="text-2xl font-bold">RATING</p>
        <div class="flex gap-x-8 pt-4">
          <p class="text-lg font-semibold">
            IMDB: {{ singleMovie.vote_average }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount } from "vue";
import { useMovieStore } from "@/stores/moviesStore";
import { storeToRefs } from "pinia";
import GoBackButton from "@/components/GoBackButton.vue";

const props = defineProps({ id: { type: String, required: true } });

const movieStore = useMovieStore();

const { singleMovie, getMovieIdCast } = storeToRefs(movieStore);

onBeforeMount(async () => {
  await movieStore.fetchSingleMovie(props.id);
  await movieStore.fetchMovieIDCast(props.id);
});
</script>

<style></style>
