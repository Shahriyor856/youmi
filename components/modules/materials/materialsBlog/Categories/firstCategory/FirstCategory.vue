<template>
  <div class="container-main main-padding flex flex-col gap-10">
    <div class="flex justify-between">
      <div class="flex gap-4 items-center">
        <h2 class="text-lg font-semibold text-gray-700">
          <NuxtLink to="/header/materials/materialsBlog">Категории</NuxtLink>
        </h2>
        <h2 class="text-[#FACD6E] text-2xl font-bold">></h2>
        <h2 class="text-lg font-semibold text-gray-700">
          Отношения с партнером
        </h2>
      </div>
      <div
        class="flex items-center rounded-full transition-all duration-700 overflow-hidden"
        :class="
          isActive ? 'w-56 bg-white border border-[#e0defa] px-3 py-1' : 'w-9'
        "
        @mouseenter="activate"
        @mouseleave="!inputValue && (isActive = false)"
      >
        <input
          v-if="isActive"
          ref="inputRef"
          v-model="inputValue"
          class="flex-1 bg-transparent outline-none border-none text-sm text-gray-700 placeholder:text-gray-400"
          placeholder="Как побороть тревогу?"
        />
        <button
          @click="activate"
          class="flex items-center justify-center shrink-0 bg-transparent border-none cursor-pointer p-1"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#7c6ff7"
            stroke-width="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </button>
      </div>
    </div>

    <CardsUI :cards="filtered" />
  </div>
</template>

<script setup lang="ts">
import CardsUI from "~/components/ui/cardsUI.vue";
import example from "@/assets/images/longExample.svg";

const newCards = [
  {
    image: example,
    question: "Как побороть тревогу?",
    tagline: "Запишитесь к психологу на личную или онлайн-сессию.",
    link: "/header/materials/materialsBlog/Categories/secondCategory",
  },
  {
    image: example,
    question: "Как побороть тревогу?",
    tagline: "Запишитесь к психологу на личную или онлайн-сессию.",
    link: "/header/materials/materialsBlog/Categories/secondCategory",
  },
  {
    image: example,
    question: "Как побороть тревогу?",
    tagline: "Запишитесь к психологу на личную или онлайн-сессию.",
    link: "/header/materials/materialsBlog/Categories/secondCategory",
  },
  {
    image: example,
    question: "Как побороть тревогу?",
    tagline: "Запишитесь к психологу на личную или онлайн-сессию.",
    link: "/header/materials/materialsBlog/Categories/secondCategory",
  },
  {
    image: example,
    question: "Как побороть тревогу?",
    tagline: "Запишитесь к психологу на личную или онлайн-сессию.",
    link: "/header/materials/materialsBlog/Categories/secondCategory",
  },
  {
    image: example,
    question: "Как побороть тревогу?",
    tagline: "Запишитесь к психологу на личную или онлайн-сессию.",
    link: "/header/materials/materialsBlog/Categories/secondCategory",
  },
];

const isActive = ref(false);
const inputValue = ref("");
const inputRef = ref<HTMLInputElement | null>(null);

const activate = async () => {
  isActive.value = true;
  await nextTick();
  inputRef.value?.focus();
};

const filtered = computed(() =>
  newCards.filter((card) =>
    card.question.toLowerCase().includes(inputValue.value.toLowerCase()),
  ),
);
</script>
