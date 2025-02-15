<script setup>
import {useRoute} from "vue-router";
import MenuIcon from "@/components/menu-icon.vue";
import {useTemplateRef} from "vue";

const route = useRoute();

const drawer = useTemplateRef('drawer')

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

function test() {
  drawer.value.classList.add('open-drawer')
}
</script>

<template>
  <div
      class="relative max-w-full h-16 md:h-32 border-b border-black flex justify-between items-center md:items-end px-4 md:px-32">
    <div class="flex items-center gap-x-4">
      <img class="h-12 md:mb-4" src="/public/logo2.svg" alt="Royal Hollingshead"/>
    </div>
<!--    <div class="flex items-end gap-x-4">-->
<!--      <img class="h-24 mb-4" src="/public/logo2.svg" alt="Royal Hollingshead"/>-->
<!--    </div>-->
    <div class="hidden md:flex items-center gap-x-8 nav pb-4">
      <RouterLink v-for="option of navOptions"
                  v-bind="option"
                  :to="option.path"
                  :class="isActive(option.path) ? 'underline' : ''"
      >{{option.label}}</RouterLink>
    </div>
    <div class="md:hidden aspect-square w-12">
      <MenuIcon @click="test()" />
    </div>
    <div ref="drawer"
         class="md:hidden absolute top-0 left-full w-[50vw] h-[100vh] bg-white z-50 flex flex-col gap-y-4
         transition-transform shadow-xl border-l">
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

.open-drawer {
  @apply transform -translate-x-full
}
</style>
<script setup lang="ts">
</script>
