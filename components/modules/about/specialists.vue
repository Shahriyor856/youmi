<template>
  <div class="bg-[#F9FCFF]">
    <div class="container-main main-padding flex flex-col gap-20">
      <div class="flex flex-col text-start gap-4">
        <p class="main-black-text">Мы работаем только с</p>
        <h1 class="main-purple-text">
          квалифицированными специалистами, которые прошли наш строгий отбор
        </h1>
      </div>
      <div class="grid grid-cols-4 gap-5">
        <div
          class="flex justify-center items-center flex-col gap-2"
          v-for="(item, index) in individuals"
          :key="index"
        >
          <div class="w-40 h-40">
            <img
              :src="item.image"
              alt="image"
              class="h-full w-full object-contain rounded-full"
            />
          </div>
          <p class="main-black-text">{{ item.title }}</p>
          <p class="main-grey-text">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import individual from "@/assets/images/Mask group.svg";
import individualTwo from "@/assets/images/Mask group (1).svg";
import individualThree from "@/assets/images/Mask group (2).svg";
import individualFour from "@/assets/images/Mask group(4).svg";

const individuals = [
  {
    image: individual,
    title: "Светлана",
    text: "5 лет опыта",
  },

  {
    image: individualFour,
    title: " Александр",
    text: "12 лет опыта",
  },
  {
    image: individualTwo,
    title: "Мария",
    text: "8 лет опыта",
  },
  {
    image: individualThree,
    title: "Елена",
    text: "10 лет опыта",
  },
];
</script>
