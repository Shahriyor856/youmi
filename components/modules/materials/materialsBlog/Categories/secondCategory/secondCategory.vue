<template>
  <div class="container-main flex flex-col">
    <div class="max-w-2xl mx-auto px-4 py-8">
      <div class="flex gap-4 items-center">
        <h2 class="text-lg font-semibold text-gray-700">
          <NuxtLink to="/header/materials/materialsBlog">Категории</NuxtLink>
        </h2>
        <h2 class="text-[#FACD6E] text-2xl font-bold">></h2>
        <h2 class="text-lg font-semibold text-gray-700">
          <NuxtLink
            to="/header/materials/materialsBlog/Categories/firstCategory"
            >Отношения с партнером</NuxtLink
          >
        </h2>
        <h2 class="text-[#FACD6E] text-2xl font-bold">></h2>
        <h2 class="text-lg font-semibold text-gray-700">
          Как побороть тревогу?
        </h2>
      </div>

      <!-- tags -->
      <div class="flex gap-2 mb-6">
        <span class="text-sm text-gray-400">Теги</span>
        <span
          class="text-sm text-[#7c6ff7] bg-[#f0eeff] px-3 py-0.5 rounded-full"
          >#отношения</span
        >
      </div>

      <!-- title -->
      <h1 class="text-2xl font-bold text-gray-800 mb-4">
        Как побороть тревогу?
      </h1>

      <!-- body text -->
      <div class="text-gray-600 text-sm leading-7 flex flex-col gap-4">
        <p>
          В работе с психологом очень важно чувствовать себя в безопасности.
          Конфиденциальность — важная составляющая этого вопроса.
        </p>
        <p>
          Профессионалы очень серьезно к этому относятся. На хорошем обучающем
          курсе психолога этому уделяется много времени. То, что происходит в
          стенах кабинета психолога, должно там остаться — в том числе факт
          самих встреч с психологом.
        </p>
        <p>
          Какие у вас права и как обезопасить себя? Иногда клиент решает
          оставить факт работы с психологом конфиденциальным или нет.
        </p>
      </div>

      <!-- image -->
      <div class="my-8 rounded-2xl overflow-hidden">
        <img :src="image" alt="article" class="w-full object-cover" />
      </div>

      <!-- more text -->
      <div class="text-gray-600 text-sm leading-7">
        <p>
          Например, до встречи/сессии с своим психологом в публичном месте, с
          окружением других знакомых лиц. Вы можете подойти к психологу,
          поздороваться и тем самым раскрыть факт ваших практик.
        </p>
      </div>

      <!-- divider -->
      <div
        class="border-t border-gray-100 mt-10 pt-4 flex justify-between items-center"
      >
        <button class="text-sm text-[#7c6ff7] font-medium hover:underline">
          Поделиться
        </button>
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
