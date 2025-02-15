<template>
  <div class="flex h-32 max-w-full items-center justify-between px-64 bg-stone-800">
    <div class="flex flex-col underline underline-offset-2">
      <RouterLink to="/">Portfolio</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
    </div>
    <div class="flex flex-col text-right">
      <span>Royal J. Hollingshead</span>
      <span>royalthepwner@gmail.com</span>
      <span>(123)-456-7890</span>
    </div>
  </div>
</template>

<style scoped>
* {
  @apply text-white;
}
</style>
<script setup lang="ts">
</script>
