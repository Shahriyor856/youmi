<template>
  <div class="flex flex-col items-center gap-40">
    <div>
      <h1 class="text-[#7872B9] font-bold text-4xl tracking-wide">
        {{ mainTitle }}
      </h1>
    </div>
    <div class="grid grid-cols-3 gap-6 items-start">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="relative flex flex-col items-center gap-5 px-5 pb-12 pt-10 bg-[#EBF5FF] rounded-3xl"
      >
        <div class="w-44 -mt-32">
          <img
            :src="card.image"
            alt="image"
            class="object-contain w-full h-auto"
          />
        </div>

        <h1 class="text-center font-medium text-2xl">{{ card.title }}</h1>

        <p class="text-center text-[#4D4D52] font-normal text-lg">
          {{ card.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import image from "@/assets/images/circle.svg";
import imageOne from "@/assets/images/freedom.svg";
import imageTwo from "@/assets/images/safety.svg";
import imageThree from "@/assets/images/time.svg";

withDefaults(
  defineProps<{
    cards?: {
      image: string;
      title: string;
      description: string;
    }[];
    mainTitle?: string;
  }>(),
  {
    cards: () => [
      {
        image: imageOne,
        title: "Свобода возможностей",
        description:
          "Проходите сессию из любой точки мира, не тратьте время на дорогу",
      },
      {
        image: imageTwo,
        title: "Свобода возможностей",
        description:
          "Проходите сессию из любой точки мира, не тратьте время на дорогу, точки мира, не тратьте время на дорогу. точки мира, не тратьте время на дорогу",
      },
      {
        image: imageThree,
        title: "Свобода возможностей",
        description:
          "Проходите сессию из любой точки мира, не тратьте время на дорогу",
      },
    ],
    mainTitle: "Онлайн-психотерапия становится комфортнее",
  },
);
</script>

<!-- USAGE EXAMPLE -->
<!-- <script setup lang="ts">
import FeatureCards from '@/components/FeatureCards.vue'
import image from '@/assets/images/circle.svg'

const cards = [
  {
    image,
    title: 'Свобода возможностей',
    description: 'Проходите сессию из любой точки мира, не тратьте время на дорогу',
  },
  {
    image,
    title: 'Свобода возможностей',
    description: 'Проходите сессию из любой точки мира...',
  },
  {
    image,
    title: 'Свобода возможностей',
    description: 'Проходите сессию из любой точки мира, не тратьте время на дорогу',
  },
]
</script> -->
