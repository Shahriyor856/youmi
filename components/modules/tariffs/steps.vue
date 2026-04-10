<template>
  <div class="container-main main-padding flex flex-col gap-20">
    <h1 class="main-purple-text text-center">Как происходит программа</h1>
    <div class="flex items-start justify-center gap-4">
      <template v-for="(step, index) in steps" :key="index">
        <div class="w-48 flex flex-col items-center gap-2">
          <img :src="step.image" alt="image" class="h-20 w-20 object-contain" />
          <p class="text-[grey] leading-relaxed text-center">
            {{ step.tagline }}
          </p>
        </div>

        <div
          v-if="index !== steps.length - 1"
          class="flex items-center justify-center"
        >
          <img
            :src="line"
            alt="image"
            class="w-full h-auto object-contain"
            :class="index % 2 !== 0 ? '-scale-y-90' : ''"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import stepOne from "@/assets/images/Vector (4).svg";
import stepTwo from "@/assets/images/2.svg";
import stepThree from "@/assets/images/3.svg";

import line from "@/assets/images/noun-arrow-2840943 1.svg";

const steps = [
  {
    image: stepOne,
    tagline: "Копируете и отправляете личную реферальную ссылку",
  },
  {
    image: stepTwo,
    tagline: "Ваш друг переходит и регистируется по ней",
  },
  {
    image: stepThree,
    tagline: "Проходит первую сессию, вы получаете бонус на баланс",
  },
];
</script>
