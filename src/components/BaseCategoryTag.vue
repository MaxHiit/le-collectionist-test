<template>
  <p class="category-tag">{{ categoryTitle }}</p>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps(["categoryTitle"]);
</script>

<style scoped>
.category-tag {
  background: #17e444;
  color: #fff;
  padding: 0.3rem;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 5px;
  font-size: 10px;
}
</style>
