<template>
  <div class="container-main main-padding flex flex-col gap-0">

    <div class="max-w-2xl mx-auto w-full flex flex-col gap-6 py-6 md:py-8">

      <!-- Breadcrumb: wraps naturally with flex-wrap -->
      <div class="flex flex-wrap gap-x-2 gap-y-1 items-center">
        <span class="text-sm font-semibold text-gray-700">
          <NuxtLink to="/header/materials/materialsBlog">Категории</NuxtLink>
        </span>
        <span class="text-[#FACD6E] font-bold">›</span>
        <span class="text-sm font-semibold text-gray-700">
          <NuxtLink to="/header/materials/materialsBlog/Categories/firstCategory">Отношения с партнером</NuxtLink>
        </span>
        <span class="text-[#FACD6E] font-bold">›</span>
        <span class="text-sm font-semibold text-gray-700">Как побороть тревогу?</span>
      </div>

      <!-- Tags -->
      <div class="flex gap-2 items-center">
        <span class="text-sm text-gray-400">Теги</span>
        <span class="text-sm text-[#7c6ff7] bg-[#f0eeff] px-3 py-0.5 rounded-full">#отношения</span>
      </div>

      <!-- Title -->
      <h1 class="text-xl md:text-2xl font-bold text-gray-800">
        Как побороть тревогу?
      </h1>

      <!-- Body text -->
      <div class="text-gray-600 text-sm leading-7 flex flex-col gap-4">
        <p>В работе с психологом очень важно чувствовать себя в безопасности. Конфиденциальность — важная составляющая этого вопроса.</p>
        <p>Профессионалы очень серьезно к этому относятся. На хорошем обучающем курсе психолога этому уделяется много времени.</p>
        <p>Какие у вас права и как обезопасить себя? Иногда клиент решает оставить факт работы с психологом конфиденциальным или нет.</p>
      </div>

      <!-- Image: constrained height on mobile -->
      <div class="rounded-2xl overflow-hidden">
        <img :src="image" alt="article" class="w-full h-48 md:h-auto object-cover" />
      </div>

      <!-- More text -->
      <div class="text-gray-600 text-sm leading-7">
        <p>Например, до встречи с своим психологом в публичном месте. Вы можете подойти к психологу и поздороваться.</p>
      </div>

      <!-- Footer: stack on mobile -->
      <div class="border-t border-gray-100 pt-4 flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center">
        <button class="text-sm text-[#7c6ff7] font-medium hover:underline text-left">Поделиться</button>
        <span class="text-xs text-gray-400">12 сентября 2022, 19:15</span>
      </div>

    </div>

    <ModulesMaterialsMaterialsBlogPopular />
    <ModulesMaterialsMaterialsBlogCtaBanner />
  </div>
</template>

<script setup lang="ts">
import image from "@/assets/images/longExample.svg";
</script>