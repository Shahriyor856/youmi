<template>
  <ModulesMainPageStepsPart :parts="steps" :control-size="true" />
</template>

<script setup lang="ts">
import one from "@/assets/images/Vector (4).svg";
import two from "@/assets/images/2.svg";
import three from "@/assets/images/3.svg";
import four from "@/assets/images/4.svg";
import imageOne from "@/assets/images/rows/noun-arrow-2840943 1.svg";
import imageTwo from "@/assets/images/rows/noun-arrow-2840943 7.svg";
import imageThree from "@/assets/images/rows/noun-arrow-2840943 8.svg";

const steps = [
  {
    number: one,
    title: "Заполните анкету,",
    text: "ответив на 5 простых вопросов, определив тему и пожелания по психологу.",
    image: imageTwo,
  },
  {
    number: two,
    title: "Заполните анкету,",
    text: "ответив на 5 простых вопросов, определив тему и пожелания по психологу.",
    image: imageOne,
  },
  {
    number: three,
    title: "Заполните анкету,",
    text: "ответив на 5 простых вопросов, определив тему и пожелания по психологу.",
    image: imageThree,
  },
  {
    number: four,
    title: "Заполните анкету,",
    text: "ответив на 5 простых вопросов, определив тему и пожелания по психологу.",
    image: imageOne,
  },
];
</script>
