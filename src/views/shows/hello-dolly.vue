<script setup>
const images = [
  {
    path: 'dolly_1',
    alt: 'dolly_1',
    summary: 'Dolly comes forward during "Hello Dolly" ',
  },
  {
    path: 'dolly_2',
    alt: 'dolly_2',
    summary: 'Miss Money',
  },
  {
    path: 'dolly_3',
    alt: 'dolly_3',
    summary: 'Curtain Call',
  },
  {
    path: 'dolly_4',
    alt: 'dolly_4',
    summary: 'It takes a Woman',
  },
]
</script>


<template>
  <div class="text-center mb-3 p-5 border-b-2 border-dark">
    <p class="font-bold text-3xl">HELLO DOLLY</p>
    <p class="font-semibold text-lg">Fremont High School</p>
    <p>Director: Ashley Patterson</p>
    <p>Asst. Director: Aubrey Obray</p>
    <p>Stage Manager: Jonah Olsen</p>
    <p>Lighting Designer: Colby Avis</p>
    <p>Asst. Lighting Designer: Royal Hollingshead</p>
  </div>

  <div>
    <div class="grid grid-cols-3 text-center"
         v-for="(image, index) of images"
         v-bind="image"
         >
      <img :class="index % 2 ? 'order-last' : ''" class="col-span-2" :src="`/show/hello-dolly/${image.path}.jpg`" :alt="image.alt">
      <span class="m-auto">{{image.summary}}</span>
          </div>
  </div>
</template>
