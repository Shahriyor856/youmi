<template>
  <section>
    <div class="container-main main-padding">
      <h2 class="text-lg font-semibold text-gray-700 mb-5">Популярное</h2>

      <div class="flex items-center gap-3">
        <button
          class="w-9 h-9 rounded-full border border-[#e0d8ff] bg-white flex items-center justify-center text-2xl leading-none flex-shrink-0 transition-colors duration-200 disabled:opacity-30 disabled:cursor-default hover:enabled:bg-[#f0ebff] hover:enabled:border-[#b8aaee]"
          style="color: #e07545"
          :disabled="currentIndex === 0"
          @click="prev"
        >
          &#8249;
        </button>

        <div class="grid grid-cols-3 gap-4 flex-1">
          <div
            v-for="article in visibleArticles"
            :key="article.id"
            class="bg-white flex flex-col justify-center items-center rounded-2xl p-4 border border-[#f0eeff] cursor-pointer transition-shadow duration-200 hover:shadow-md"
            @click="$emit('open', article)"
          >
            <p
              class="text-[13px] font-semibold text-gray-700 leading-snug mb-3"
            >
              {{ article.title }}
            </p>
            <img
              :src="article.image"
              alt="image"
              class="w-full h-32 rounded-xl bg-[#ede9ff] object-cover"
            />
          </div>
        </div>

        <button
          class="w-9 h-9 rounded-full border border-[#e0d8ff] bg-white flex items-center justify-center text-2xl leading-none flex-shrink-0 transition-colors duration-200 disabled:opacity-30 disabled:cursor-default hover:enabled:bg-[#f0ebff] hover:enabled:border-[#b8aaee]"
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

const visibleCount = 3;
const currentIndex = ref(0);

const articles = [
  { id: 1, title: "Как пережить расставание?", image: image },
  { id: 2, title: "Как пережить расставание?", image: image },
  { id: 3, title: "Как пережить расставание?", image: image },
  { id: 4, title: "Как справиться с тревогой?", image: image },
  { id: 5, title: "Работа с эмоциями", image: image },
];

const visibleArticles = computed(() =>
  articles.slice(currentIndex.value, currentIndex.value + visibleCount),
);

function prev() {
  if (currentIndex.value > 0) currentIndex.value--;
}

function next() {
  if (currentIndex.value < articles.length - visibleCount) currentIndex.value++;
}
</script>
