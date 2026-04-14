<template>
  <div class="grid grid-cols-3 gap-5">
    <div
      class="flex flex-col p-2 hover:scale-105 duration-500 cursor-pointer"
      v-for="(card, index) in cards"
      :key="index"
    >
      <NuxtLink :to="card.link">
        <img
          :src="card.image"
          alt="image"
          class="w-full h-32 rounded-xl bg-[#ede9ff] object-cover"
        />
      </NuxtLink>
      <h1 class="text-lg font-semibold">{{ card.question }}</h1>
      <p class="text-sm font-light">{{ card.tagline }}</p>
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
      {
        image: image,
        question: "Как побороть тревогу?",
        tagline: "Запишитесь к психологу на личную или онлайн-сессию.",
        link: "/header/materials/materialsBlog/Categories/secondCategory",
      },
      {
        image: image,
        question: "Как побороть тревогу?",
        tagline: "Запишитесь к психологу на личную или онлайн-сессию.",
        link: "/header/materials/materialsBlog/Categories/secondCategory",
      },
      {
        image: image,
        question: "Как побороть тревогу?",
        tagline: "Запишитесь к психологу на личную или онлайн-сессию.",
        link: "/header/materials/materialsBlog/Categories/secondCategory",
      },
      {
        image: image,
        question: "Как побороть тревогу?",
        tagline: "Запишитесь к психологу на личную или онлайн-сессию.",
        link: "/header/materials/materialsBlog/Categories/secondCategory",
      },
      {
        image: image,
        question: "Как побороть тревогу?",
        tagline: "Запишитесь к психологу на личную или онлайн-сессию.",
        link: "/header/materials/materialsBlog/Categories/secondCategory",
      },
      {
        image: image,
        question: "Как побороть тревогу?",
        tagline: "Запишитесь к психологу на личную или онлайн-сессию.",
        link: "/header/materials/materialsBlog/Categories/secondCategory",
      },
    ],
  },
);
</script>
