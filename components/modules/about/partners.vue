<template>
  <div
    class="container-main main-padding flex flex-col justify-center items-center gap-10 md:gap-20"
  >
    <h1 class="main-purple-text">О нас пишут</h1>
    <div
      class="grid grid-cols-3 sm:grid-cols-3 md:flex md:justify-between w-full items-center gap-6 md:gap-4"
    >
      <img
        :src="item.image"
        alt="image"
        v-for="(item, index) in images"
        :key="index"
        class="h-6 md:h-8 object-contain mx-auto md:mx-0"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import image from "@/assets/images/partners/forbes (1).svg";
import imageTwo from "@/assets/images/partners/logo kinzal (1).svg";
import imageThree from "@/assets/images/partners/logo (1).svg";
import imageFour from "@/assets/images/partners/vogue (1).svg";
import imageFive from "@/assets/images/partners/рбк (1).svg";

const images = [
  {
    image: image,
  },
  {
    image: imageTwo,
  },
  {
    image: imageThree,
  },
  {
    image: imageFour,
  },
  {
    image: imageFive,
  },
];
</script>
