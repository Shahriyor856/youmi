<template>
  <div class="bg-[#F9FCFF] py-14">
    <div class=" flex flex-col gap-10">
      <!-- TEXTS -->
      <div class="flex flex-col items-center gap-2">
        <p class="main-black-text">Вместе мы справимся</p>
        <h1 class="main-purple-text">В YouMi вы не одни</h1>
        <p class="main-grey-text text-center">
          Профессиональные психологи помогут разобрать <br />
          вопросы, которые вы не можете решить в одиночку:
        </p>
      </div>

      <!-- CAROUSEL -->
      <div class="overflow-hidden py-3 select-none">
        <div class="flex flex-col gap-2.5">
          <div class="flex gap-2.5 w-max animate-scroll-left">
            <TagPill
              v-for="tag in [...row1, ...row1]"
              :key="tag.id + tag.label"
              :label="tag.label"
              :filled="tag.filled"
            />
          </div>
          <div class="flex gap-2.5 w-max animate-scroll-right">
            <TagPill
              v-for="tag in [...row2, ...row2]"
              :key="tag.id + tag.label"
              :label="tag.label"
              :filled="tag.filled"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TagPill from "@/components/modules/mainPage/Tagpill.vue";

defineOptions({ inheritAttrs: false });

const row1 = [
  { id: "1", label: "Фобии", filled: false },
  { id: "2", label: "Неврозы", filled: false },
  { id: "3", label: "Самооценка", filled: true },
  { id: "4", label: "Апатия", filled: false },
  { id: "5", label: "Стрессы", filled: false },
  { id: "6", label: "Неуверенность в себе", filled: true },
  { id: "7", label: "Мотивация", filled: true },
  { id: "8", label: "Панические атаки", filled: false },
  { id: "9", label: "Тревожность", filled: false },
];

const row2 = [
  { id: "10", label: "Депрессивное состояние", filled: false },
  { id: "11", label: "Безразличие", filled: false },
  { id: "12", label: "Чувство тревоги", filled: true },
  { id: "13", label: "Хроническая усталость", filled: false },
  { id: "14", label: "Отношения", filled: false },
  { id: "15", label: "Выгорание", filled: false },
  { id: "16", label: "Самопознание", filled: false },
  { id: "17", label: "Одиночество", filled: true },
];
</script>
