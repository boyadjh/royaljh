<script setup>
import {useRoute} from "vue-router";

const route = useRoute();

const navOptions = [
  {
    label: 'Me',
    path: '/'
  },
  {
    label: 'Portfolio',
    path: '/portfolio'
  },
  {
    label: 'About',
    path: '/about'
  },
  {
    label: 'Contact',
    path: '/contact'
  }
]

function isActive(path) {
  return route.path === path
}
</script>

<template>
  <div class="max-w-full h-32 border-b border-black flex justify-between items-end px-32">
    <div class="flex items-end gap-x-4">
      <img class="h-24 mb-4" src="/public/logo2.svg" alt="Royal Hollingshead"/>
    </div>
    <div class="flex items-center gap-x-8 nav pb-4">
      <RouterLink v-for="option of navOptions"
                  v-bind="option"
                  :to="option.path"
                  :class="isActive(option.path) ? 'underline' : ''"
      >{{option.label}}</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.nav > * {
  @apply text-lg font-semibold text-dark underline-offset-4 uppercase;
  &:hover {
    @apply underline;
  }
}
</style>
<script setup lang="ts">
</script>
