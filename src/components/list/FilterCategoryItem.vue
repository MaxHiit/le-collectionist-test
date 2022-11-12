<template>
  <li
    ref="itemRef"
    :class="{ 'filter-item--active': id === index }"
    class="px-4 py-1 md:pr-10 md:py-2 min-w-max md:min-w-full rounded-md md:rounded-r-2xl md:rounded-l-none hover:bg-[#17e44380] hover:scale-110 cursor-pointer ease-in-out duration-300 flex items-center md:items-baseline justify-center md:justify-start"
    @click="updateCategoryFilter(index, categoryTitle)"
  >
    <span class="font-bold uppercase text-sm">{{ categoryTitle }}</span>
  </li>
</template>

<script setup>
import { ref } from "vue";
import { useMovieStore } from "../../stores/MoviesStore";
// eslint-disable-next-line no-unused-vars
const props = defineProps(["categoryTitle", "index"]);
const moviesStore = useMovieStore();

const itemRef = ref("");

const updateCategoryFilter = (filterItemIndex, name) => {
  moviesStore.getFilterChoice(name);
  itemRef.value.classList.toggle("filter-item--active");
};
</script>

<style>
.filter-item--active {
  background-color: #17e44380;
}
</style>
