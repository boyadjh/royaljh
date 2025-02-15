<script setup lang="ts">
import Tile from "@/components/tile.vue";
</script>

<template>
  <section class="flex flex-col">
    <div class="w-full h-24 px-64 py-2 flex items-end">
      <span class="text-2xl font-extralight">Recent Projects</span>
    </div>
    <div class="flex flex-wrap">
    <Tile label="HELLO DOLLY" source="construct.jpeg" />
    <Tile label="HELLO DOLLY" source="construct.jpeg" />
    <Tile label="HELLO DOLLY" source="construct.jpeg" />
      <Tile label="HELLO DOLLY" source="construct.jpeg" />
    </div>
  </section>
  <section class="flex flex-col">
    <div class="w-full h-24 px-64 py-2 flex items-end justify-end">
      <span class="text-2xl font-extralight">Recent Projects</span>
    </div>
    <div class="flex flex-wrap mb-8">
      <Tile label="HELLO DOLLY" source="construct.jpeg" />
      <Tile label="HELLO DOLLY" source="construct.jpeg" />
      <Tile label="HELLO DOLLY" source="construct.jpeg" />
      <Tile label="HELLO DOLLY" source="construct.jpeg" />
    </div>
  </section>
</template>
