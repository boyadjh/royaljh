<script setup>
import {useRoute, useRouter} from "vue-router";
import MenuIcon from "@/components/menu-icon.vue";
import {onMounted, ref, useTemplateRef} from "vue";
import DismissIcon from "@/components/dismiss-icon.vue";

const route = useRoute();
const router = useRouter();

const drawerOpened = ref(false)

const navOptions = [
  {
    label: 'Shows',
    path: '/'
  },
  {
    label: 'About Me',
    path: '/about'
  },
  {
    label: 'Contact',
    path: '/contact'
  }
]

function isActive(path) {
  return route.path.split('/')[1] === path.replace('/', '')
}

function toggle() {
  drawerOpened.value = !drawerOpened.value
}
</script>

<template>
  <div class="h-16 md:h-32 flex justify-between items-center header-overlay">
    <div class="flex items-center">
      <img @click="router.push('/')" class="h-12 md:h-24 md:mb-4 cursor-pointer hover:brightness-10 invert"
           src="/logo.svg"
           alt="Royal Hollingshead"/>
    </div>
    <div class="hidden md:flex items-center gap-x-8 nav pb-4">
      <RouterLink v-for="option of navOptions"
                  v-bind="option"
                  :to="option.path"
                  class="nav-option"
                  :class="isActive(option.path) ? 'underline' : ''"
      >{{option.label}}</RouterLink>
    </div>
    <div class="md:hidden aspect-square w-12 ">
      <DismissIcon v-if="drawerOpened" @click="toggle()"/>
      <MenuIcon v-if="!drawerOpened" @click="toggle()" />
    </div>

    <Transition name="drawer">
    <div v-if="drawerOpened"
         class="absolute top-0 left-0 w-full h-[calc(100vh-4.25rem)] z-40 overflow-hidden"
         @click="toggle()">

        <div
             class="inner md:hidden absolute top-0 pt-16 left-full w-[45vw] h-[100vh] z-50 flex flex-col gap-y-4
             bg-[#00000044]
             transform transition-transform -translate-x-full shadow-xl px-4 py-2"
        >
          <RouterLink v-for="option of navOptions"
                      v-bind="option"
                      :to="option.path"
                      class="text-3xl select-none text-right"
                      :class="isActive(option.path) ? 'underline' : ''"
          >{{option.label}}</RouterLink>
        </div>
    </div>
    </Transition>
  </div>
</template>

<style scoped>
.nav > * {
  @apply text-lg font-semibold text-light underline-offset-4 uppercase;
  &:hover {
    @apply underline;
  }
}

.header-normal {
  @apply relative border-b shadow max-w-full px-4 md:px-16 lg:px-32 md:items-end;
}

.header-overlay {
  @apply absolute left-0 top-0 right-0 z-50 px-4 md:px-8 md:items-start pt-4;
}

.header-overlay .nav-option {
  @apply text-opacity-60;
  &:hover {
    @apply text-opacity-100
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
