<script setup>
</script>


<template>
  <div class="relative h-[100vh] w-full bg-cover bg-bottom bg-no-repeat" style="background-image:
  url('/show/hello-dolly/hero.jpg');">
    <div class="absolute inset-0 gradient text-light text-opacity-90 flex justify-end">
          <div class="font-medium text-right mb-3 p-5 mt-8 w-3/4 md:w-full">
            <p class="font-bold text-4xl">HELLO DOLLY</p>
            <p class="font-semibold text-xl">Fremont High School</p>
            <p class="text-xs">Director: Ashley Patterson</p>
            <p class="text-xs">Asst. Director: Aubrey Obray</p>
            <p class="text-xs">Stage Manager: Jonah Olsen</p>
            <p class="text-xs">Lighting Designer: Colby Avis</p>
            <p class="text-xs">Asst. Lighting Designer: Royal Hollingshead</p>
          </div>
    </div>
  </div>

  <div class="w-full grid grid-cols-4 gap-0.5 grid-rows-4 bg-black">
    <div class="col-start-4 row-start-1 text-light p-4">
      <span class="text-2xl">November 2024</span>
      <p class="mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec metus arcu, posuere nec ante
        et, pretium laoreet sapien. Nullam at quam nec libero egestas sagittis tristique sit amet lorem. Integer facilisis laoreet felis. Curabitur quis
      </p>
    </div>
    <img class="row-span-2" src="/show/hello-dolly/vert_1.jpg" alt="dolly" />
    <img class="col-start-2 row-start-2 row-span-2" src="/show/hello-dolly/vert_2.jpg" alt="dolly" />
    <img class="col-start-3 row-start-3 col-span-2" src="/show/hello-dolly/hori_1.jpg" alt="dolly" />
    <img class="row-start-3 row-span-2" src="/show/hello-dolly/vert_3.jpg" alt="dolly" />
    <img class="col-start-3 row-start-2 col-span-2" src="/show/hello-dolly/hori_4.jpg" alt="dolly" />
    <img class="col-start-2 row-start-1 col-span-2" src="/show/hello-dolly/hori_3.jpg" alt="dolly" />
    <img class="col-start-2 row-start-4 col-span-2" src="/show/hello-dolly/hori_2.jpg" alt="dolly" />
    <img class="col-start-4 row-start-4" src="/show/hello-dolly/square_1.jpg" alt="dolly" />
  </div>
<!--  <div class="grid grid-cols-3 items-center">-->
<!--    <div class="col-span-2 order-last">-->
<!--      <img class="h-full w-full" src="/show/hello-dolly/dolly_1.jpg" alt="dolly" />-->
<!--    </div>-->
<!--    <div class="font-medium text-center mb-3 p-5">-->
<!--      <p class="font-bold text-4xl">HELLO DOLLY</p>-->
<!--      <p class="font-semibold text-xl">Fremont High School</p>-->
<!--      <p>Director: Ashley Patterson</p>-->
<!--      <p>Asst. Director: Aubrey Obray</p>-->
<!--      <p>Stage Manager: Jonah Olsen</p>-->
<!--      <p>Lighting Designer: Colby Avis</p>-->
<!--      <p>Asst. Lighting Designer: Royal Hollingshead</p>-->
<!--    </div>-->
<!--  </div>-->

<!--  <div>-->
<!--    <div class="grid grid-cols-3 text-center"-->
<!--         v-for="(image, index) of images"-->
<!--         v-bind="image"-->
<!--         >-->
<!--      <img :class="index % 2 ? 'order-last' : ''" class="col-span-2" :src="`/show/hello-dolly/${image.path}.jpg`" :alt="image.alt">-->
<!--      <span class="m-auto">{{image.summary}}</span>-->
<!--          </div>-->
<!--  </div>-->
</template>

<style scoped>
.gradient {
  background: linear-gradient(180deg, rgb(0, 0, 0, .8) 20%, rgba(0, 0, 0, 0) 50%);
}
</style>
