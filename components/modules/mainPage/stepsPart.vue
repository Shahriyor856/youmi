<template>
  <div class="bg-[#F9FCFF]">
    <div class="container-main main-padding flex flex-col gap-12 md:gap-16 lg:gap-28">

      <h1 class="main-purple-text text-center text-2xl md:text-3xl lg:text-4xl">
        {{ mainTitle }}
      </h1>

      <div
        v-for="(part, index) in parts"
        :key="index"
      >
        <!-- Stack on mobile, alternate direction on desktop -->
        <div
          class="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-12"
          :class="index % 2 !== 0 ? 'md:flex-row-reverse' : ''"
        >
          <!-- Number + text -->
          <div class="flex items-center gap-6 md:gap-10 md:max-w-96">
            <div class="h-20 md:h-40 shrink-0">
              <img
                :src="part.number"
                alt="number"
                class="h-full w-auto object-contain"
              />
            </div>
            <div class="flex flex-col gap-2">
              <h2 class="main-black-text text-lg md:text-xl font-semibold">
                {{ part.title }}
              </h2>
              <p class="main-grey-text text-sm md:text-base">
                {{ part.text }}
              </p>
            </div>
          </div>

          <!-- Illustration -->
          <div
            class="w-full max-h-48 md:max-h-none md:w-80 lg:w-96 shrink-0"
            :class="controlSize ? 'md:w-36' : ''"
          >
            <img
              :src="part.image"
              alt="image"
              class="w-full h-full md:h-auto max-h-48 md:max-h-none object-contain mx-auto"
            />
          </div>
        </div>
      </div>

      <!-- Footer: stack on mobile, side-by-side on md -->
      <div
        v-if="!controlSize"
        class="flex flex-col md:flex-row md:justify-between md:items-center gap-6"
      >
        <div class="flex gap-5 items-center max-w-sm">
          <img :src="icon" alt="" class="w-10 h-10 md:w-16 md:h-16 shrink-0 object-contain" />
          <p class="main-grey-text text-sm md:text-base">
            Мы напомним вам о сессии за сутки и за час до начала
          </p>
        </div>
        <BaseButton class="w-full md:w-auto">Сделать первый шаг</BaseButton>
      </div>

      <div
        v-else
        class="flex justify-center items-center pt-10 md:pt-20"
      >
        <BaseButton class="w-full md:w-auto">Сделать первый шаг</BaseButton>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import one from "@/assets/images/Vector (4).svg";
import two from "@/assets/images/2.svg";
import three from "@/assets/images/3.svg";
import four from "@/assets/images/4.svg";
import imageOne from "@/assets/images/questionnaire.svg";
import imageTwo from "@/assets/images/calendar.svg";
import imageThree from "@/assets/images/profiles.svg";
import imageFour from "@/assets/images/test.svg";
import icon from "@/assets/images/icon.svg";
import BaseButton from "~/components/ui/BaseButton.vue";

const props = withDefaults(
  defineProps<{
    parts?: { number?: string; title?: string; text?: string; image?: string }[];
    mainTitle?: string;
    controlSize?: boolean;
  }>(),
  {
    parts: () => [
      { number: one,   title: "Заполните анкету,", text: "ответив на 5 простых вопросов, определив тему и пожелания по психологу.", image: imageOne },
      { number: two,   title: "Заполните анкету,", text: "ответив на 5 простых вопросов, определив тему и пожелания по психологу.", image: imageThree },
      { number: three, title: "Заполните анкету,", text: "ответив на 5 простых вопросов, определив тему и пожелания по психологу.", image: imageTwo },
      { number: four,  title: "Заполните анкету,", text: "ответив на 5 простых вопросов, определив тему и пожелания по психологу.", image: imageFour },
    ],
    mainTitle: "Сделайте 4 шага навстречу психотерапии",
    controlSize: false,
  },
);
</script>