<template>
  <div class="container-main main-padding flex flex-col gap-10 md:gap-20">
    <h1 class="main-purple-text text-center text-2xl md:text-3xl lg:text-4xl">
      Как происходит программа
    </h1>

    <!--
      Mobile: vertical stack, no connector lines
      Desktop: horizontal row with connector lines between steps
    -->

    <!-- MOBILE: simple vertical list (hidden on md+) -->
    <div class="flex flex-col gap-8 md:hidden">
      <div
        v-for="(step, index) in steps"
        :key="'mobile-' + index"
        class="flex items-center gap-4"
      >
        <img
          :src="step.image"
          alt=""
          class="h-16 w-16 shrink-0 object-contain"
        />
        <p class="text-[grey] leading-relaxed text-sm">{{ step.tagline }}</p>
      </div>
    </div>

    <!-- DESKTOP: horizontal row with connectors (hidden on mobile) -->
    <div class="hidden md:flex items-start justify-center gap-4">
      <template v-for="(step, index) in steps" :key="index">
        <div class="w-40 lg:w-48 flex flex-col items-center gap-2">
          <img
            :src="step.image"
            alt=""
            class="h-16 w-16 lg:h-20 lg:w-20 object-contain"
          />
          <p
            class="text-[grey] leading-relaxed text-center text-sm lg:text-base"
          >
            {{ step.tagline }}
          </p>
        </div>

        <div
          v-if="index !== steps.length - 1"
          class="flex items-center justify-center mt-8"
        >
          <img
            :src="line"
            alt=""
            class="w-12 lg:w-full h-auto object-contain"
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
