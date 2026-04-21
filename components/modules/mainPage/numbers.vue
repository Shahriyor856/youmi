<template>
  <div class="bg-[#F9FCFF]">
    <!-- Removed duplicate main-padding -->
    <div class="container-main main-padding flex flex-col gap-8 md:gap-10">

      <!-- Header: stack on mobile, side-by-side on md -->
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div class="flex flex-col gap-3 md:max-w-lg">
          <h1 class="main-purple-text text-2xl md:text-3xl lg:text-4xl">
            Экстренная помощь
          </h1>
          <p class="main-grey-text text-sm md:text-base">
            Если вам необходима срочная психологическая помощь и вы чувствуете,
            что не можете больше справиться самостоятельно, обратитесь по одному
            из контактов ниже.
          </p>
        </div>
        <!-- Fixed typo: h-6w-60 → h-auto, constrain with max-w -->
        <div class="w-40 md:w-60 shrink-0 mx-auto md:mx-0">
          <img :src="image" alt="" class="w-full h-auto object-contain" />
        </div>
      </div>

      <!-- Grid: 1 col on mobile, 2 col on md -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        <div
          v-for="(item, index) in numbers"
          :key="index"
          class="flex flex-col gap-1"
        >
          <p class="main-black-text text-base md:text-lg font-semibold">
            {{ item.number }}
          </p>
          <p class="main-grey-text text-sm md:text-base">
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
  { number: "+7 495 989 50 50", text: "Центр экстренной психологической помощи МЧС России" },
  { number: "+7 495 989 50 50", text: "Центр экстренной психологической помощи МЧС России" },
  { number: "+7 495 989 50 50", text: "Центр экстренной психологической помощи МЧС России" },
  { number: "+7 495 989 50 50", text: "Центр экстренной психологической помощи МЧС России" },
  { number: "+7 495 989 50 50", text: "Центр экстренной психологической помощи МЧС России" },
  { number: "+7 495 989 50 50", text: "Центр экстренной психологической помощь МЧС России" },
  { number: "+7 495 989 50 50", text: "Центр экстренной психологической помощи МЧС России" },
];
</script>