<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
    <div
      class="flex flex-col gap-2 p-2 hover:scale-105 duration-500 cursor-pointer"
      v-for="(card, index) in cards"
      :key="index"
    >
      <NuxtLink :to="card.link" class="flex flex-col gap-2">
        <img
          :src="card.image"
          alt=""
          class="w-full h-36 md:h-40 rounded-xl bg-[#ede9ff] object-cover"
        />
        <h2 class="text-base md:text-lg font-semibold">{{ card.question }}</h2>
        <p class="text-sm font-light text-gray-500">{{ card.tagline }}</p>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import image from "@/assets/images/categories/image.avif";

withDefaults(
  defineProps<{
    cards?: {
      image: string;
      question: string;
      tagline: string;
      link: string;
    }[];
  }>(),
  {
    cards: () => [
      { image, question: "Как побороть тревогу?", tagline: "Запишитесь к психологу на личную или онлайн-сессию.", link: "/header/materials/materialsBlog/Categories/secondCategory" },
      { image, question: "Как побороть тревогу?", tagline: "Запишитесь к психологу на личную или онлайн-сессию.", link: "/header/materials/materialsBlog/Categories/secondCategory" },
      { image, question: "Как побороть тревогу?", tagline: "Запишитесь к психологу на личную или онлайн-сессию.", link: "/header/materials/materialsBlog/Categories/secondCategory" },
      { image, question: "Как побороть тревогу?", tagline: "Запишитесь к психологу на личную или онлайн-сессию.", link: "/header/materials/materialsBlog/Categories/secondCategory" },
      { image, question: "Как побороть тревогу?", tagline: "Запишитесь к психологу на личную или онлайн-сессию.", link: "/header/materials/materialsBlog/Categories/secondCategory" },
      { image, question: "Как побороть тревогу?", tagline: "Запишитесь к психологу на личную или онлайн-сессию.", link: "/header/materials/materialsBlog/Categories/secondCategory" },
    ],
  },
);
</script>