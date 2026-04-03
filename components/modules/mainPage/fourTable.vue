<template>
  <div class="container-main main-padding flex flex-col gap-10">
    <div class="text-start flex flex-col gap-4">
      <p class="main-black-text">Мы работаем только с</p>
      <h1 class="main-purple-text">
        квалифицированными специалистами, <br />
        которые прошли наш строгий отбор
      </h1>
      <p class="main-grey-text">
        Помимо серии собеседований и испытаний по разработанной нами <br />
        методологии, психологи предоставляют необходимые документы:
      </p>
    </div>

    <div class="flex flex-col gap-4">
      <div class="flex flex-auto gap-4">
        <div v-for="(item, index) in items" :key="index">
          <div class="flex items-center gap-4 p-5 bg-[#EBF5FF] rounded-2xl">
            <div v-if="item.image" class="w-28 h-28">
              <img
                :src="item.image"
                alt="image"
                class="w-full h-full object-contain"
              />
            </div>
            <div v-else class="w-10 h-28"></div>
            <div class="flex flex-col gap-2">
              <h1 class="main-black-text">{{ item.title }}</h1>
              <p class="main-grey-text">
                {{ item.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-auto gap-4">
        <div v-for="(item, index) in itemsTwo" :key="index">
          <div class="flex items-center gap-4 p-5 bg-[#EBF5FF] rounded-2xl">
            <div v-if="item.image" class="w-28 h-28">
              <img
                :src="item.image"
                alt="image"
                class="w-full h-full object-contain"
              />
            </div>
            <div v-else class="w-10 h-28"></div>
            <div class="flex flex-col gap-2">
              <h1 class="main-black-text">{{ item.title }}</h1>
              <p class="main-grey-text">
                {{ item.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import book from "@/assets/images/book.svg";
import watch from "@/assets/images/watch.svg";

const props = withDefaults(
  defineProps<{
    items?: {
      image?: string;
      title?: string;
      text?: string;
    }[];
    itemsTwo?: {
      image?: string;
      title?: string;
      text?: string;
    }[];
  }>(),
  {
    items: () => [
      {
        image: book,
        title: "Образование",
        text: "Диплом о высшем психологическом образовании и дополнительные сертификаты",
      },
      {
        title: "Опыт работы",
        text: "Подтвержденный опыт работы не менее 3-х лет",
      },
    ],
    itemsTwo: () => [
      {
        title: "Обучение",
        text: "Прохождение супервизии от 20 часов в год",
      },
      {
        image: watch,
        title: "Личная терапия",
        text: "Прохождение личной терапии от 50 часов в год ерапии от 50 часов ",
      },
    ],
  },
);
</script>
