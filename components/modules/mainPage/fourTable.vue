<template>
  <div class="container-main main-padding flex flex-col gap-8 md:gap-10">

    <div class="text-start flex flex-col gap-3 md:gap-4">
      <p class="main-black-text text-sm md:text-base max-w-screen-sm">{{ title }}</p>
      <h1 class="main-purple-text text-2xl md:text-3xl lg:text-4xl">{{ text }}</h1>
      <p class="main-grey-text text-sm md:text-base max-w-screen-sm">{{ textTwo }}</p>
    </div>

    <!-- Single flat grid: all cards in one grid, each card controls its own span -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
      <div
        v-for="(item, index) in flatCards"
        :key="index"
        class="flex items-center gap-4 p-4 md:p-5 bg-[#EBF5FF] rounded-2xl"
        :class="item.wide ? 'md:col-span-3' : 'md:col-span-1'"
      >
        <div v-if="item.image" class="w-16 h-16 md:w-20 md:h-20 shrink-0">
          <img :src="item.image" alt="" class="w-full h-full object-contain" />
        </div>
        <div class="flex flex-col gap-1 md:gap-2">
          <h2 class="main-black-text text-base md:text-lg font-semibold">{{ item.title }}</h2>
          <p class="main-grey-text text-sm md:text-base">{{ item.text }}</p>
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
  wide?: boolean  // true = spans all 3 columns
}

const props = withDefaults(
  defineProps<{
    flatCards?: CardItem[];
    title?: string;
    text?: string;
    textTwo?: string; 
  }>(),
  {
    flatCards: () => [
      // Row 1: full width with image
      {
        image: book,
        title: "Документы",
        text: "подтверждающие дополнительное образование в определенном направлении психотерапии. Мы рассматриваем только длительные программы обучения, около 500 часов.",
        wide: true,
      },
      // Row 2: three narrow cards
      {
        title: "Диплом",
        text: "об окончании профильного высшего учебного заведения.",
        wide: false,
      },
      {
        title: "Прохождение",
        text: "супервизии от 20 часов в год.",
        wide: false,
      },
      {
        title: "Прохождение",
        text: "личной терапии от 50 часов в год.",
        wide: false,
      },
      // Row 3: full width with image
      {
        image: watch,
        title: "Подтвержденный опыт работы",
        text: "не менее 3-х лет. Учитывается только опыт консультирования за оплату и не в рамках учебной программы.",
        wide: true,
      },
    ],
  },
);
</script>