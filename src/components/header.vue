<script setup>
import {useRoute} from "vue-router";
import MenuIcon from "@/components/menu-icon.vue";
import {ref, useTemplateRef} from "vue";
import DismissIcon from "@/components/dismiss-icon.vue";

const route = useRoute();

const drawer = useTemplateRef('drawer')

const drawerOpened = ref(false)

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

function toggle() {
  drawerOpened.value = !drawerOpened.value
}
</script>

<template>
  <div
      class="relative max-w-full h-16 md:h-32 border-b flex justify-between items-center md:items-end px-4 md:px-16 lg:px-32">
    <div class="flex items-center gap-x-4">
      <img class="h-12 md:h-24 md:mb-4" src="/public/logo.svg" alt="Royal Hollingshead"/>
    </div>
    <div class="hidden md:flex items-center gap-x-8 nav pb-4">
      <RouterLink v-for="option of navOptions"
                  v-bind="option"
                  :to="option.path"
                  :class="isActive(option.path) ? 'underline' : ''"
      >{{option.label}}</RouterLink>
    </div>
    <div class="md:hidden aspect-square w-12">
      <DismissIcon v-if="drawerOpened" @click="toggle()"/>
      <MenuIcon v-if="!drawerOpened" @click="toggle()" />
    </div>

    <Transition name="drawer">
    <div v-if="drawerOpened"
         class="absolute top-full left-0 mt-[2px] w-full h-[calc(100vh-4.25rem)] z-40 bg-[#00000040] overflow-hidden"
         @click="toggle()">

        <div
             class="inner md:hidden absolute top-0 left-full w-[45vw] h-[100vh] bg-white z-50 flex flex-col gap-y-4
             transform transition-transform -translate-x-full shadow-xl border-l px-4 py-2"
        >
          <RouterLink v-for="option of navOptions"
                      v-bind="option"
                      :to="option.path"
                      class="text-3xl select-none"
                      :class="isActive(option.path) ? 'underline' : ''"
          >{{option.label}}</RouterLink>
        </div>
    </div>
    </Transition>
  </div>
</template>

<style scoped>
.nav > * {
  @apply text-lg font-semibold text-dark underline-offset-4 uppercase;
  &:hover {
    @apply underline;
  }
}

.drawer-enter-active .inner, .drawer-leave-active .inner {
  @apply translate-x-0
}

.drawer-enter-from .inner, .drawer-leave-to .inner {
  @apply translate-x-0
}

</style>
<script setup lang="ts">
</script>
