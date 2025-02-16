<script setup>
import LinkIcon from "@/components/link-icon.vue";
</script>

<template>
  <div class="flex h-32 w-full items-center justify-between px-8 md:px-32 lg:px-64 bg-stone-950">
    <div class="flex flex-col underline underline-offset-2 nav-container">
      <RouterLink to="/">Shows</RouterLink>
      <RouterLink to="/about">About Me</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
    </div>
    <div class="flex flex-col text-right">
      <span>Royal J. Hollingshead</span>
      <span>royalthepwner@gmail.com</span>
      <a href="https://www.instagram.com/royal.hollingshead/" target="_blank"
         class="flex align-center justify-end gap-x-0.5">Instagram
        <LinkIcon class="aspect-square w-4 inline stroke-neutral-900 fill-none"/></a>
    </div>
  </div>
</template>

<style scoped>
* {
  @apply text-neutral-600;
}

.nav-container > *:hover {
  @apply text-neutral-200
}
</style>
<script setup lang="ts">
</script>
