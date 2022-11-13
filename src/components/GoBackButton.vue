<template>
  <div
    class="flex items-center gap-4 cursor-pointer text-lg font-semibold"
    @click="$router.back()"
  >
    <ArrowLeftIcon class="h-6 w-6 font-bold" />
    <p class="text-lg font-semibold">Go Back</p>
  </div>
</template>

<script setup>
import { ArrowLeftIcon } from "@heroicons/vue/24/solid";
</script>

<style></style>
