<template>
  <div class="container-main main-padding">
    <div class="flex flex-col items-center gap-6">

      <h1 class="text-[#7872B9] font-bold text-2xl md:text-3xl lg:text-4xl tracking-wide text-center">
        {{ mainTitle }}
      </h1>

      <!-- mt-16 md:mt-20 replaces the fragile gap-40 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start w-full mt-16 md:mt-20">
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="relative flex flex-col items-center gap-5 px-5 pb-12 pt-10 bg-[#EBF5FF] rounded-3xl"
        >
          <!-- Smaller pull-up on mobile, full on md+ -->
          <div class="w-36 md:w-44 -mt-24 md:-mt-32">
            <img
              :src="card.image"
              :alt="card.title"
              class="object-contain w-full h-auto"
            />
          </div>

          <h2 class="text-center font-medium text-xl md:text-2xl">
            {{ card.title }}
          </h2>

          <p class="text-center text-[#4D4D52] font-normal text-base md:text-lg">
            {{ card.description }}
          </p>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import imageOne from "@/assets/images/freedom.svg";
import imageTwo from "@/assets/images/safety.svg";
import imageThree from "@/assets/images/time.svg";

withDefaults(
  defineProps<{
    cards?: {
      image: string;
      title: string;
      description: string;
    }[];
    mainTitle?: string;
  }>(),
  {
    cards: () => [
      {
        image: imageOne,
        title: "Свобода возможностей",
        description: "Проходите сессию из любой точки мира, не тратьте время на дорогу",
      },
      {
        image: imageTwo,
        title: "Свобода возможностей",
        description: "Проходите сессию из любой точки мира, не тратьте время на дорогу",
      },
      {
        image: imageThree,
        title: "Свобода возможностей",
        description: "Проходите сессию из любой точки мира, не тратьте время на дорогу",
      },
    ],
    mainTitle: "Онлайн-психотерапия становится комфортнее",
  },
);
</script>