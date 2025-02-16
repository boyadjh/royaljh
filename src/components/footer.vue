<template>
  <div class="flex h-32 w-full items-center justify-between px-8 md:px-32 lg:px-64 bg-stone-950">
    <div class="flex flex-col underline underline-offset-2 nav-container">
      <RouterLink to="/">Me</RouterLink>
      <RouterLink to="/shows">Shows</RouterLink>
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
  @apply text-neutral-400;
}

.nav-container > *:hover {
  @apply text-neutral-200
}
</style>
<script setup lang="ts">
</script>
