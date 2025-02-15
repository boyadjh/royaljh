<script setup lang="ts">
import Tile from "@/components/tile.vue";
</script>

<template>
  <section class="flex flex-col">
    <div class="w-full h-24 px-64 py-2 flex items-end">
      <span class="text-xl font-bold">RECENT PROJECTS</span>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <Tile label="HELLO DOLLY" source="construct.jpeg" link-to="hello-dolly"/>
    <Tile label="HELLO DOLLY" source="construct.jpeg" />
    <Tile class="hidden md:block" label="HELLO DOLLY" source="construct.jpeg" />
    <Tile class="hidden lg:block" label="HELLO DOLLY" source="construct.jpeg" />
    </div>
  </section>
  <section class="flex flex-col">
    <div class="w-full h-24 px-64 py-2 flex items-end">
      <span class="text-xl font-bold">RECENT PROJECTS</span>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <Tile label="HELLO DOLLY" source="construct.jpeg" />
      <Tile label="HELLO DOLLY" source="construct.jpeg" />
      <Tile class="hidden md:block" label="HELLO DOLLY" source="construct.jpeg" />
      <Tile class="hidden lg:block" label="HELLO DOLLY" source="construct.jpeg" />
    </div>
  </section>
</template>
