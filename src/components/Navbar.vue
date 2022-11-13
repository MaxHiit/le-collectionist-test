<!-- eslint-disable-next-line vue/multi-word-component-names -->
<template>
  <header
    class="sticky top-0 left-0 z-10"
    :class="{ isSticky: scrollPosition > 0 }"
  >
    <nav class="flex items-center h-16 px-6 md:px-12">
      <RouterLink to="/" class="mr-5">
        <div class="w-5 min-w-[30px] max-w-[100px]"><LogoIcon /></div>
      </RouterLink>
      <RouterLink to="/movies" class="navbar-link">List</RouterLink>
      <RouterLink to="/favoris" class="navbar-link ml-auto">
        <HeartIcon
          class="h-10 w-10 ease-in-out duration-300 hover:text-red-500 hover:animate-pulse"
        />
      </RouterLink>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from "vue-router";
import LogoIcon from "./icons/IconLogo.vue";
import { onMounted, ref } from "vue";
import { HeartIcon } from "@heroicons/vue/24/solid";

const scrollPosition = ref(null);

const updateScroll = () => {
  scrollPosition.value = window.pageYOffset;
};

onMounted(() => {
  window.addEventListener("scroll", updateScroll);
});
</script>

<style>
.isSticky {
  background-color: rgba(0, 0, 0, 1);
}

.navbar-link {
  font-size: calc(1.5rem + (30 - 24) * ((100vw - 375px) / (1980 - 375)));
}
</style>
