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
    image: 'construct.jpeg',
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
  <section v-for="i of [0, 1]" v-bind="i" class="flex flex-col">
    <div class="w-full h-24 px-16 md:px-32 lg:px-64 py-2 flex items-end">
      <span class="text-xl font-bold">RECENT PROJECTS</span>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      <Tile v-for="(project, index) of recentProjects" v-bind="project" :label="project.label" :source="project.image"
            :link-to="project.link" />
    </div>
  </section>
</template>
