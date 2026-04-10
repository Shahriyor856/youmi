<template>
  <div class="bg-[#F9FCFF]">
    <div
      class="container-main main-padding flex flex-col"
      :class="controlSize ? 'gap-0' : 'gap-28'"
    >
      <h1 class="main-purple-text text-center">
        {{ mainTitle }}
      </h1>
      <div v-for="(part, index) in parts">
        <div
          class="flex"
          :class="[
            index % 2 !== 0 ? 'flex-row-reverse' : '',
            controlSize ? 'gap-28' : 'justify-between',
          ]"
        >
          <div class="flex items-center gap-10 max-w-96">
            <div class="h-40">
              <img
                :src="part.number"
                alt="number"
                class="h-full w-auto object-contain"
              />
            </div>
            <div>
              <h1 class="main-black-text">{{ part.title }}</h1>
              <p class="main-grey-text">
                {{ part.text }}
              </p>
            </div>
          </div>
          <div :class="controlSize ? 'w-36  mt-24' : 'w-96'">
            <img
              :src="part.image"
              alt="image"
              class="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
      <div v-if="controlSize" class="flex justify-center items-center pt-20">
        <BaseButton>Сделать первый шаг</BaseButton>
      </div>
      <div class="flex justify-between" v-else>
        <div class="flex gap-5 items-center max-w-72">
          <img :src="icon" alt="image" class="w-16 h-16 object-contain" />
          <p class="main-grey-text px-">
            Мы напомним вам о сессии за сутки и за час до начала
          </p>
        </div>
        <BaseButton>Сделать первый шаг</BaseButton>
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
    parts?: {
      number?: string;
      title?: string;
      text?: string;
      image?: string;
    }[];
    mainTitle?: string;
    controlSize?: boolean;
  }>(),
  {
    parts: () => [
      {
        number: one,
        title: "Заполните анкету,",
        text: "ответив на 5 простых вопросов, определив тему и пожелания по психологу.",
        image: imageOne,
      },
      {
        number: two,
        title: "Заполните анкету,",
        text: "ответив на 5 простых вопросов, определив тему и пожелания по психологу.",
        image: imageThree,
      },
      {
        number: three,
        title: "Заполните анкету,",
        text: "ответив на 5 простых вопросов, определив тему и пожелания по психологу.",
        image: imageTwo,
      },
      {
        number: four,
        title: "Заполните анкету,",
        text: "ответив на 5 простых вопросов, определив тему и пожелания по психологу.",
        image: imageFour,
      },
    ],
    mainTitle: "Сделайте 4 шага навстречу психотерапии",
    controlSize: false,
  },
);
</script>
