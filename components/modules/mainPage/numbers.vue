<template>
  <div class="main-padding">
    <div class="container-main main-padding bg-[#F9FCFF] flex flex-col gap-10">
      <div class=" flex items-center justify-between">
        <div class="flex flex-col">
          <h1 class="main-purple-text">Экстренная помощь</h1>
          <p class="main-grey-text">
            Если вам необходима срочная психологическая помощь и вы чувствуете,
            что не можете больше справиться самостоятельно, обратитесь по одному
            из контактов ниже.
          </p>
        </div>
        <div class="w-60 h-6w-60">
          <img :src="image" alt="image" class="w-full h-full object-contain" />
        </div>
      </div>
      <div class="grid grid-cols-2 gap-5">
        <div
          class="flex flex-col text-start"
          v-for="(item, index) in numbers"
          :key="index"
        >
          <p class="main-black-text">{{ item.number }}</p>
          <p class="main-grey-text">
            {{ item.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import image from "@/assets/images/specialist.svg";

const numbers = [
  {
    number: "+7 495 989 50 50",
    text: "Центр экстренной психологической помощи МЧС России",
  },
  {
    number: "+7 495 989 50 50",
    text: "Центр экстренной психологической помощи МЧС России",
  },
  {
    number: "+7 495 989 50 50",
    text: "Центр экстренной психологической помощи МЧС России",
  },
  {
    number: "+7 495 989 50 50",
    text: "Центр экстренной психологической помощи МЧС России",
  },
  {
    number: "+7 495 989 50 50",
    text: "Центр экстренной психологической помощи МЧС России",
  },
  {
    number: "+7 495 989 50 50",
    text: "Центр экстренной психологической помощи МЧС России",
  },
  {
    number: "+7 495 989 50 50",
    text: "Центр экстренной психологической помощи МЧС России",
  },
];
</script>
