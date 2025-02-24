<script setup lang="ts">
import Tile from "@/components/tile.vue";
import { SHOWS } from "@/assets/shows.conf"

const projects = Object.keys(SHOWS)
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 flex-grow-0">
    <Tile v-for="project of projects" :label="SHOWS[project].title" :source="`show/${project}/thumbnail.jpg`"
          :link-to="project"/>
    <Tile v-for="project of projects" :label="SHOWS[project].title" :source="`show/${project}/thumbnail.jpg`"
          :link-to="project"/>
    <Tile v-for="project of projects" :label="SHOWS[project].title" :source="`show/${project}/thumbnail.jpg`"
          :link-to="project"/>
  </div>
</template>
