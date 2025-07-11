<template>
  <div class="w-full h-full grid grid-cols-1 md:grid-cols-2 flex-1 items-center pt-1 md:mt-4">
    <div class="h-[30vh] md:h-full relative overflow-hidden">
      <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/show/hello-dolly/square_1.jpg');">
        <div class="absolute left-0 top-0 right-0 h-32 gradient"></div>
      </div>
    </div>
    <div class="flex flex-col my-2 md:mt-8 mx-2 md:ml-4 break-words gap-y-8 px-4">
      <span class="text-3xl font-semibold">Royal Hollingshead</span>
      <p>I am currently graduated from Fremont High School. That's where I have found my passion for live production. I believe that live events are so much better than just sitting and watching a movie. </p>
    </div>
  </div>
</template>

<style scoped>
.gradient {
  background: linear-gradient(to top, rgba(0,0,0,0) 0%,rgba(0,0,0,0.5) 30%);
}
</style>
