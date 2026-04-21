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
      <div
        class="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-8 md:gap-12"
      >
        <!-- Text content -->
        <div class="flex flex-col gap-8 md:max-w-lg xl:max-w-xl">
          <div class="flex flex-col gap-4">
            <p
              v-if="showFirstBlackText"
              class="text-base font-semibold text-[#4D4D52]"
            >
              {{ firstBlackText }}
            </p>
            <h1
              v-if="showTagline"
              class="text-[#7872B9] font-bold font-montserrat text-2xl md:text-3xl xl:text-4xl"
            >
              {{ tagline }}
            </h1>
            <p
              v-if="showTitle"
              class="text-[#4D4D52] font-medium font-montserrat text-xl md:text-2xl xl:text-3xl"
            >
              {{ title }}
            </p>
          </div>

          <div class="flex flex-col gap-4 items-start">
            <NuxtLink :to="buttonLink" class="w-full md:w-auto">
              <BaseButton
                v-if="showButton"
                variant="primary"
                class="w-full md:w-auto"
              >
                {{ buttonText }}
              </BaseButton>
            </NuxtLink>
            <p v-if="showPrice" class="text-[#424257] text-sm font-semibold">
              {{ priceText }}
            </p>
          </div>
        </div>

        <!-- Image -->
        <div
          v-if="imageSrc"
          class="w-full max-h-64 md:max-h-none md:w-72 lg:w-80 shrink-0"
        >
          <img
            :src="imageSrc"
            :alt="imageAlt"
            class="w-full h-full md:h-auto max-h-64 md:max-h-none object-contain mx-auto"
          />
        </div>
      </div>
    </div>
  </div>
</template>
