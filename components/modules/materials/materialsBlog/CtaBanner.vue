<template>
  <section>
    <div class="container-main main-padding">
      <div class="rounded-[20px] px-6 py-8 md:px-12 md:py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 overflow-hidden bg-[#F9FCFF]">

        <div class="flex flex-col gap-5 md:gap-6">
          <h2 class="text-xl md:text-2xl font-bold leading-snug text-[#2a2560]">
            Подберите своего психолога онлайн
          </h2>
          <button
            class="text-white bg-[#7872B9] text-sm font-semibold rounded-3xl px-7 py-3 border-none cursor-pointer transition-all duration-200 hover:-translate-y-0.5 w-full md:w-auto"
            @click="$emit('find')"
          >
            Подобрать психолога
          </button>
        </div>

        <!-- Image: smaller on mobile, natural size on desktop -->
        <div class="w-32 h-28 md:w-[200px] md:h-[180px] shrink-0 mx-auto md:mx-0">
          <img :src="image" alt="" class="w-full h-full object-contain" />
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
defineEmits(["find"]);
import image from "@/assets/images/categories/Слой 2 (1).svg";
</script>