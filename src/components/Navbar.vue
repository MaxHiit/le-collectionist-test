<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header class="bg-blue-400">
    <nav>
      <RouterLink to="/">
        <p class="text-red-900">home</p>
      </RouterLink>
      <RouterLink to="/list">List</RouterLink>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style></style>
