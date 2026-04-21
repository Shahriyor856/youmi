<template>
  <div class="container-main main-padding flex flex-col gap-8 md:gap-10">

    <!-- Header: stack on mobile, side-by-side on md -->
    <div class="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">

      <!-- Breadcrumb -->
      <div class="flex flex-wrap gap-2 items-center">
        <h2 class="text-sm md:text-base font-semibold text-gray-700">
          <NuxtLink to="/header/materials/materialsBlog">Категории</NuxtLink>
        </h2>
        <span class="text-[#FACD6E] text-lg font-bold">›</span>
        <h2 class="text-sm md:text-base font-semibold text-gray-700">
          Отношения с партнером
        </h2>
      </div>

      <!-- Search: always visible input on mobile, animated on desktop -->
      <div class="w-full md:w-auto">
        <!-- Mobile: plain visible input -->
        <div class="flex md:hidden items-center border border-[#e0defa] rounded-full px-3 py-1.5 bg-white gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7c6ff7" stroke-width="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            v-model="inputValue"
            class="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-400"
            placeholder="Как побороть тревогу?"
          />
        </div>

        <!-- Desktop: animated expand -->
        <div
          class="hidden md:flex items-center rounded-full transition-all duration-700 overflow-hidden"
          :class="isActive ? 'w-56 bg-white border border-[#e0defa] px-3 py-1' : 'w-9'"
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
          <button @click="activate" class="flex items-center justify-center shrink-0 bg-transparent border-none cursor-pointer p-1">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7c6ff7" stroke-width="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
          </button>
        </div>
      </div>

    </div>

    <CardsUI :cards="filtered" />
  </div>
</template>

<script setup lang="ts">
import CardsUI from "~/components/ui/cardsUI.vue";
import example from "@/assets/images/longExample.svg";

const newCards = [
  { image: example, question: "Как побороть тревогу?", tagline: "Запишитесь к психологу на личную или онлайн-сессию.", link: "/header/materials/materialsBlog/Categories/secondCategory" },
  { image: example, question: "Как побороть тревогу?", tagline: "Запишитесь к психологу на личную или онлайн-сессию.", link: "/header/materials/materialsBlog/Categories/secondCategory" },
  { image: example, question: "Как побороть тревогу?", tagline: "Запишитесь к психологу на личную или онлайн-сессию.", link: "/header/materials/materialsBlog/Categories/secondCategory" },
  { image: example, question: "Как побороть тревогу?", tagline: "Запишитесь к психологу на личную или онлайн-сессию.", link: "/header/materials/materialsBlog/Categories/secondCategory" },
  { image: example, question: "Как побороть тревогу?", tagline: "Запишитесь к психологу на личную или онлайн-сессию.", link: "/header/materials/materialsBlog/Categories/secondCategory" },
  { image: example, question: "Как побороть тревогу?", tagline: "Запишитесь к психологу на личную или онлайн-сессию.", link: "/header/materials/materialsBlog/Categories/secondCategory" },
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