<template>
  <div class="max-w-full h-32 border-b border-black flex justify-between items-center px-32 ">
    <span class="text-3xl text-dark">ROYAL HOLLINGSHEAD</span>
    <div class="flex items-center gap-x-8 nav">
      <RouterLink to="/">Me</RouterLink>
      <RouterLink to="/portfolio">Portfolio</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.nav > * {
  @apply underline text-lg underline-offset-4;
}
</style>
<script setup lang="ts">
</script>
