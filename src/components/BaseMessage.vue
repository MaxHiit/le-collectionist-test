<template>
  <div class="flex items-center justify-center w-full">
    <p class="text-lg uppercase font-semibold">
      {{ message }}
    </p>
  </div>
</template>

<script setup>
defineProps(["message"]);
</script>
