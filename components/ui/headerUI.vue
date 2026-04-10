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
  firstBlackText?: string;

  // control props

  showButton?: boolean;
  showTagline?: boolean;
  showPrice?: boolean;
  showTitle?: boolean;
  showFirstBlackText?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  tagline: "Вместе мы справимся",
  title: "Найдите своего психолога онлайн",
  buttonText: "Найти психолога",
  buttonLink: "/header/doctors",
  priceText: "2770 руб. за 50 минут сессии",
  imageSrc: example,
  imageAlt: "Hero illustration",
  firstBlackText: "example",

  // control props

  showButton: true,
  showTagline: true,
  showPrice: true,
  showTitle: true,
  showFirstBlackText: false,
});
</script>

<template>
  <div class="bg-[#F9FCFF]">
    <div class="container-main main-padding">
      <div class="bg-[#F9FCFF]">
        <div class="container-main mian-padding">
          <div class="flex items-center justify-between">
            <div class="flex flex-col gap-10">
              <div class="flex flex-col gap-5">
                <p
                  v-if="showFirstBlackText"
                  class="main-black-text text-lg font-semibold"
                >
                  {{ firstBlackText }}
                </p>
                <h1
                  v-if="showTagline"
                  class="text-[#7872B9] font-bold font-montserrat text-3xl"
                >
                  {{ tagline }}
                </h1>
                <p
                  v-if="showTitle"
                  class="text-[#4D4D52] font-medium font-montserrat text-3xl whitespace-pre-line"
                >
                  {{ title }}
                </p>
              </div>
              <div class="flex flex-col gap-5">
                <NuxtLink :to="buttonLink">
                  <BaseButton v-if="showButton" variant="primary">{{
                    buttonText
                  }}</BaseButton>
                </NuxtLink>
                <p
                  v-if="showPrice"
                  class="text-[#424257] text-sm font-semibold max-w-screen-sm"
                >
                  {{ priceText }}
                </p>
              </div>
            </div>
            <div v-if="imageSrc" class="w-80 shrink-0">
              <img
                :src="imageSrc"
                :alt="imageAlt"
                class="w-full h-auto object-contain"
              />
            </div>
          </div>
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
