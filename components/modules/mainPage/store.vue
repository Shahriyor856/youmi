<template>
  <div class="bg-[#F9FCFF]">
    <div class="container-main main-padding flex flex-col gap-10 md:gap-16 items-center">

      <!-- Stack on mobile, side-by-side on md -->
      <div class="flex flex-col md:flex-row md:justify-between md:items-center gap-10 w-full">

        <!-- Left: text content -->
        <div class="flex flex-col gap-6 md:max-w-md lg:max-w-lg">
          <h1 class="main-purple-text text-2xl md:text-3xl lg:text-4xl">
            YouMi заботиться о вас даже вне сессий
          </h1>
          <p class="main-black-text text-base md:text-lg">
            Работая с YouMi от 4 сессий мы дарим доступ к приложению
            с виртуальным психологом.
          </p>

          <div class="flex flex-col gap-4">
            <div
              v-for="(item, index) in features"
              :key="index"
              class="flex items-center gap-4"
            >
              <img :src="tick" alt="" class="w-6 h-6 md:w-8 md:h-8 shrink-0 object-contain" />
              <p class="main-grey-text text-sm md:text-base">{{ item }}</p>
            </div>
          </div>

          <div v-if="useButton" class="mt-2">
            <BaseButton class="w-full md:w-auto">Доступно в App Store</BaseButton>
          </div>
        </div>

        <!-- Right: app screenshots — overlap via negative margin, not position hacks -->
        <div class="relative w-full md:w-72 lg:w-80 shrink-0 flex justify-center">
          <img
            :src="screenOne"
            alt="App screen 1"
            class="object-contain w-48 md:w-56 relative z-10 translate-x-6"
          />
          <img
            :src="screenTwo"
            alt="App screen 2"
            class="object-contain w-48 md:w-56 absolute top-0 -translate-x-6"
          />
        </div>

      </div>

      <div v-if="useButtonTwo">
        <BaseButton class="w-full md:w-auto">Доступно в App Store</BaseButton>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import tick from "@/assets/images/noun-check-mark-1295838 4.svg";
import screenOne from "@/assets/images/screen 1.svg";
import screenTwo from "@/assets/images/screen 2.svg";
import BaseButton from "~/components/ui/BaseButton.vue";

interface Props {
  useButton?: boolean;
  useButtonTwo?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  useButton: false,
  useButtonTwo: true,
});

const features = [
  "Прорабатывайте себя с помощью упражнений и аудиопрактик",
  "Прорабатывайте себя с помощью упражнений и аудиопрактик",
  "Прорабатывайте себя с помощью упражнений и аудиопрактик",
];
</script>