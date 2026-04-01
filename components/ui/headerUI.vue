<script setup lang="ts">
import BaseButton from "./BaseButton.vue";
import example from "@/assets/images/example.svg";

interface Props {
  tagline?: string;
  title?: string;
  buttonText?: string;
  buttonLink?: string;
  priceText?: string;
  imageSrc?: string;
  imageAlt?: string;
}

const props = withDefaults(defineProps<Props>(), {
  tagline: "Вместе мы справимся",
  title: "Найдите своего психолога онлайн",
  buttonText: "Найти психолога",
  buttonLink: "/header/doctors",
  priceText: "2770 руб. за 50 минут сессии",
  imageSrc: example,
  imageAlt: "Hero illustration",
});
</script>

<template>
  <div class="bg-[#F9FCFF]">
    <div class="container-main mian-padding">
      <div class="flex items-center justify-between">
        <div class="flex flex-col gap-10">
          <div class="flex flex-col gap-5">
            <h1 class="text-[#7872B9] font-bold font-montserrat text-3xl">
              {{ tagline }}
            </h1>
            <p
              class="text-[#4D4D52] font-medium font-montserrat text-3xl whitespace-pre-line"
            >
              {{ title }}
            </p>
          </div>
          <div class="flex flex-col gap-5">
            <NuxtLink :to="buttonLink">
              <BaseButton variant="primary">{{ buttonText }}</BaseButton>
            </NuxtLink>
            <p class="text-[#424257] text-sm font-semibold">
              {{ priceText }}
            </p>
          </div>
        </div>
        <div v-if="imageSrc" class="w-80">
          <img
            :src="imageSrc"
            :alt="imageAlt"
            class="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<!-- <HeroSection
  tagline="Вместе мы справимся"
  title="Найдите своего&#10;психолога онлайн"
  button-text="Найти психолога"
  button-link="/header/doctors"
  price-text="2770 руб. за 50 минут сессии"
  :image-src="illustration"
  image-alt="Psychology illustration"
/> -->
