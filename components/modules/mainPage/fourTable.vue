<template>
  <div class="container-main main-padding flex flex-col gap-8 md:gap-10">
    <div
      v-if="title || text || textTwo"
      class="text-start flex flex-col gap-3 md:gap-4"
    >
      <p
        v-if="title"
        class="main-black-text text-sm md:text-base max-w-screen-sm"
      >
        {{ title }}
      </p>
      <h1 v-if="text" class="main-purple-text text-2xl md:text-3xl lg:text-4xl">
        {{ text }}
      </h1>
      <p
        v-if="textTwo"
        class="main-grey-text text-sm md:text-base max-w-screen-sm"
      >
        {{ textTwo }}
      </p>
    </div>

    <div class="flex flex-col gap-4">
      <div
        v-for="(row, rowIndex) in rows"
        :key="rowIndex"
        class="grid gap-4 items-stretch"
        :class="{
          'grid-cols-1 md:grid-cols-2': cols === 2,
          'grid-cols-1 md:grid-cols-3': cols === 3,
        }"
      >
        <div
          v-for="(item, cardIndex) in row"
          :key="cardIndex"
          class="flex items-center gap-4 p-4 md:p-5 bg-[#EBF5FF] rounded-2xl h-full"
          :class="{
            'md:col-span-2': cols === 2 && row.length === 1,
            'md:col-span-3': cols === 3 && row.length === 1,
          }"
        >
          <div v-if="item.image" class="w-16 h-16 md:w-20 md:h-20 shrink-0">
            <img
              :src="item.image"
              alt=""
              class="w-full h-full object-contain"
            />
          </div>
          <div class="flex flex-col gap-1 md:gap-2">
            <h2 class="main-black-text text-base md:text-lg font-semibold">
              {{ item.title }}
            </h2>
            <p class="main-grey-text text-sm md:text-base">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import book from "@/assets/images/book.svg";
import watch from "@/assets/images/watch.svg";

interface CardItem {
  image?: string;
  title?: string;
  text?: string;
}

const props = withDefaults(
  defineProps<{
    rows?: CardItem[][];
    cols?: number;
    title?: string;
    text?: string;
    textTwo?: string;
  }>(),
  {
    cols: 2,
    rows: () => [
      [
        {
          image: book,
          title: "Образование",
          text: "Диплом о высшем психологическом образовании и дополнительные сертификаты",
        },
        {
          title: "Опыт работы",
          text: "Подтвержденный опыт работы не менее 3-х лет",
        },
      ],
      [
        {
          title: "Обучение",
          text: "Прохождение супервизии от 20 часов в год",
        },
        {
          image: watch,
          title: "Личная терапия",
          text: "Прохождение личной терапии от 50 часов в год",
        },
      ],
    ],
  },
);
</script>
