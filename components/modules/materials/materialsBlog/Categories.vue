<template>
  <section>
    <div class="container-main main-padding">
      <div class="flex items-center justify-between mb-5">
        <h2 class="text-lg font-semibold text-gray-700">Категории</h2>
        <button
          class="p-1 flex items-center justify-center bg-transparent border-none cursor-pointer"
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

      <div class="grid grid-cols-4 gap-3">
        <div
          v-for="category in categories"
          :key="category.id"
          class="relative overflow-hidden rounded-2xl min-h-[164px] p-4 cursor-pointer transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md"
          style="background-color: #ebf5ff"
          @click="$emit('select', category)"
        >
          <NuxtLink :to="category.link">
            <p
              class="text-[13px] font-semibold leading-snug max-w-[100px] m-0"
              style="color: #3d3580"
            >
              {{ category.name }}
            </p>
            <img
              :src="category.image"
              alt="image"
              class="absolute bottom-2 right-2 w-[90px] h-[90px] object-contain"
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
  {
    id: 1,
    name: "Отношения с партнером",
    image: imageOne,
    link: "/header/materials/materialsBlog/Categories/firstCategory",
  },
  {
    id: 2,
    name: "Чувство тревоги",
    image: imageOne,
    link: "/header/materials/materialsBlog/Categories/firstCategory",
  },
  {
    id: 3,
    name: "Эмоции",
    image: imageOne,
    link: "/header/materials/materialsBlog/Categories/firstCategory",
  },
  {
    id: 4,
    name: "Депрессивное состояние",
    image: imageOne,
    link: "/header/materials/materialsBlog/Categories/firstCategory",
  },
  {
    id: 5,
    name: "Отношения с партнером",
    image: imageOne,
    link: "/header/materials/materialsBlog/Categories/firstCategory",
  },
  {
    id: 6,
    name: "Чувство тревоги",
    image: imageOne,
    link: "/header/materials/materialsBlog/Categories/firstCategory",
  },
  {
    id: 7,
    name: "Эмоции",
    image: imageOne,
    link: "/header/materials/materialsBlog/Categories/firstCategory",
  },
  {
    id: 8,
    name: "Депрессивное состояние",
    image: imageOne,
    link: "/header/materials/materialsBlog/Categories/firstCategory",
  },
];
</script>
