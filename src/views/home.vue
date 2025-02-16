<script setup lang="ts">
import Tile from "@/components/tile.vue";
import { SHOWS } from "@/assets/shows.conf";

console.log(SHOWS['hello-dolly']);

const recentProjects = Object.keys(SHOWS).slice(0, 4)

</script>

<template>
  <section class="flex flex-col">
    <div class="w-full h-auto md:h-20 px-4 md:px-64 lg:px-80 pt-8 pb-1 md:py-2 flex items-end">
      <span class="text-xl font-bold">RECENT PROJECTS</span>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      <Tile v-for="project of recentProjects" :label="SHOWS[project].title"
            :source="`/show/${project}/thumbnail.jpg`"
            :link-to="project" />
    </div>
  </section>
</template>
