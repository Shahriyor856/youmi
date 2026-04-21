<template>
  <section>
    <div class="container-main main-padding">

      <h2 class="text-base md:text-lg font-semibold text-gray-700 mb-4 md:mb-5">
        Популярное
      </h2>

      <div class="flex items-center gap-2 md:gap-3">

        <!-- Prev button -->
        <button
          class="w-8 h-8 md:w-9 md:h-9 rounded-full border border-[#e0d8ff] bg-white flex items-center justify-center text-xl md:text-2xl leading-none shrink-0 transition-colors duration-200 disabled:opacity-30 disabled:cursor-default hover:enabled:bg-[#f0ebff]"
          style="color: #e07545"
          :disabled="currentIndex === 0"
          @click="prev"
        >
          &#8249;
        </button>

        <!-- Cards grid: 1 col mobile → 2 col tablet → 3 col desktop -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 flex-1">
          <div
            v-for="article in visibleArticles"
            :key="article.id"
            class="bg-white flex flex-col gap-3 rounded-2xl p-4 border border-[#f0eeff] cursor-pointer transition-shadow duration-200 hover:shadow-md"
            @click="$emit('open', article)"
          >
            <p class="text-[13px] font-semibold text-gray-700 leading-snug">
              {{ article.title }}
            </p>
            <img
              :src="article.image"
              alt=""
              class="w-full h-28 md:h-32 rounded-xl bg-[#ede9ff] object-cover"
            />
          </div>
        </div>

        <!-- Next button -->
        <button
          class="w-8 h-8 md:w-9 md:h-9 rounded-full border border-[#e0d8ff] bg-white flex items-center justify-center text-xl md:text-2xl leading-none shrink-0 transition-colors duration-200 disabled:opacity-30 disabled:cursor-default hover:enabled:bg-[#f0ebff]"
          style="color: #e07545"
          :disabled="currentIndex >= articles.length - visibleCount"
          @click="next"
        >
          &#8250;
        </button>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import image from "@/assets/images/longExample.svg";

defineEmits(["open"]);

// Responsive visible count based on screen width
const visibleCount = computed(() => {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
});

const currentIndex = ref(0);

const articles = [
  { id: 1, title: "Как пережить расставание?", image },
  { id: 2, title: "Как пережить расставание?", image },
  { id: 3, title: "Как пережить расставание?", image },
  { id: 4, title: "Как справиться с тревогой?", image },
  { id: 5, title: "Работа с эмоциями", image },
];

const visibleArticles = computed(() =>
  articles.slice(currentIndex.value, currentIndex.value + visibleCount.value),
);

function prev() {
  if (currentIndex.value > 0) currentIndex.value--;
}

function next() {
  if (currentIndex.value < articles.length - visibleCount.value) currentIndex.value++;
}
</script>