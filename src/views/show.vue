<script setup>
import {SHOWS} from "@/assets/shows.conf.js";

const props = defineProps(['showName']);

const name = props.showName;
const show = SHOWS[name]

const classes = (tile) => {
  return `${tile.type} ${tile.hideSmall ? 'hidden md:block' : ''}`
}
</script>

<template>
  <div class="relative h-[100vh] w-full bg-cover bg-bottom bg-no-repeat" :style="{'background-image':
  `url(/show/${name}/hero.jpg)`}">
    <div class="absolute inset-0 gradient text-light text-opacity-90 flex justify-end">
      <div class="font-medium text-right mb-3 p-5 mt-16 md:mt-8 w-full">
        <p class="font-bold text-4xl uppercase">{{ show.title }}</p>
        <p class="font-semibold text-xl uppercase">{{ show.subtitle }}</p>
        <p v-for="credit in show.credits" class="text-xs">{{ credit }}</p>
      </div>
    </div>
  </div>

  <div class="w-full grid grid-cols-2 lg:grid-cols-4 gap-0.5 grid-rows-2 lg:grid-rows-4 grid-flow-row-dense bg-black">
    <div v-for="tile in show.tiles" :key="tile.id" :class="classes(tile)">
      <img v-if="tile.type !== 'blog'"
           class="w-full h-full"
           :src="`/show/${name}/${tile.file}`"
           alt="">
      <div v-else :class="classes(tile)">
        <span class="text-2xl">{{tile.header}}</span>
        <p class="mt-2">{{tile.description}}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.vert {
  @apply row-span-2;
}
.hori {
  @apply col-span-2;
}
.blog {
  @apply text-light p-4;
}
.gradient {
   background: linear-gradient(180deg, rgb(0, 0, 0, .8) 20%, rgba(0, 0, 0, 0) 50%);
 }
</style>
