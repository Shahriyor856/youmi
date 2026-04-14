<template>
  <section>
    <div class="container-main main-padding">
      <div
        class="rounded-[20px] px-12 py-10 flex items-center justify-between gap-6 overflow-hidden bg-[#F9FCFF]"
      >
        <div>
          <h2
            class="text-2xl font-bold leading-snug mb-6 max-w-[280px]"
            style="color: #2a2560"
          >
            Подберите своего психолога онлайн
          </h2>
          <button
            class="text-white bg-[#7872B9] text-sm font-semibold rounded-3xl px-7 py-3 border-none cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
            @click="$emit('find')"
          >
            Подобрать психолога
          </button>
        </div>

        <div class="flex-shrink-0 w-[200px] h-[180px]">
          <img :src="image" alt="image" class="w-full h-full object-contain" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineEmits(["find"]);

import image from "@/assets/images/categories/Слой 2 (1).svg";
</script>
