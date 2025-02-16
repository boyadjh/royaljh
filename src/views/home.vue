<script setup lang="ts">
import Tile from "@/components/tile.vue";

const recentProjects = [
  {
    label: 'the lightning thief',
    image: 'construct.jpeg',
    link: 'the-lightning-thief'
  },
  {
    label: 'hello dolly',
    image: 'show/hello-dolly/thumbnail.jpg',
    link: 'hello-dolly'
  },
  {
    label: 'snow white and the prince',
    image: 'construct.jpeg',
    link: 'snow-white-and-the-prince'
  },
  {
    label: 'the lion king',
    image: 'construct.jpeg',
    link: 'the-lion-king'
  }
]

</script>

<template>
  <section class="flex flex-col">
    <div class="w-full h-auto md:h-20 px-4 md:px-64 lg:px-80 pt-8 pb-1 md:py-2 flex items-end">
      <span class="text-xl font-bold">RECENT PROJECTS</span>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      <Tile v-for="project of recentProjects" v-bind="project" :label="project.label" :source="project.image"
            :link-to="project.link" />
    </div>
  </section>
</template>
