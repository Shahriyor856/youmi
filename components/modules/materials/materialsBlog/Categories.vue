<template>
  <section>
    <div class="container-main main-padding">

      <div class="flex items-center justify-between mb-4 md:mb-5">
        <h2 class="text-base md:text-lg font-semibold text-gray-700">Категории</h2>
        <button class="p-1 flex items-center justify-center bg-transparent border-none cursor-pointer">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7c6ff7" stroke-width="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
        </button>
      </div>

      <!-- 2 cols mobile → 3 cols tablet → 4 cols desktop -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        <div
          v-for="category in categories"
          :key="category.id"
          class="relative overflow-hidden rounded-2xl min-h-[140px] md:min-h-[164px] p-4 cursor-pointer transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md bg-[#EBF5FF]"
          @click="$emit('select', category)"
        >
          <NuxtLink :to="category.link">
            <!-- Text: no max-w clipping, let it wrap -->
            <p class="text-[12px] md:text-[13px] font-semibold leading-snug text-[#3d3580] max-w-[80px] md:max-w-[100px]">
              {{ category.name }}
            </p>
            <!-- Image: smaller on mobile so it doesn't overrun the text -->
            <img
              :src="category.image"
              alt=""
              class="absolute bottom-2 right-2 w-[70px] h-[70px] md:w-[90px] md:h-[90px] object-contain"
            />
          </NuxtLink>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import imageOne from "@/assets/images/categories/emotions 1.svg";

defineEmits(["select"]);

const categories = [
  { id: 1, name: "Отношения с партнером", image: imageOne, link: "/header/materials/materialsBlog/Categories/firstCategory" },
  { id: 2, name: "Чувство тревоги", image: imageOne, link: "/header/materials/materialsBlog/Categories/firstCategory" },
  { id: 3, name: "Эмоции", image: imageOne, link: "/header/materials/materialsBlog/Categories/firstCategory" },
  { id: 4, name: "Депрессивное состояние", image: imageOne, link: "/header/materials/materialsBlog/Categories/firstCategory" },
  { id: 5, name: "Отношения с партнером", image: imageOne, link: "/header/materials/materialsBlog/Categories/firstCategory" },
  { id: 6, name: "Чувство тревоги", image: imageOne, link: "/header/materials/materialsBlog/Categories/firstCategory" },
  { id: 7, name: "Эмоции", image: imageOne, link: "/header/materials/materialsBlog/Categories/firstCategory" },
  { id: 8, name: "Депрессивное состояние", image: imageOne, link: "/header/materials/materialsBlog/Categories/firstCategory" },
];
</script>