<template>
  <div class="bg-[#F9FCFF]">
    <div class="container-main main-padding flex flex-col gap-10 md:gap-16 lg:gap-20">

      <h1 class="main-purple-text text-center text-2xl md:text-3xl lg:text-4xl">
        Преимущества работы с YouMi
      </h1>

      <div class="flex flex-col gap-16 md:gap-20 lg:gap-28">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="flex"
          :class="index % 2 !== 0 ? 'md:justify-end' : 'md:justify-start'"
        >
          <div class="flex flex-col items-start bg-white relative px-5 md:px-8 pb-8 md:pb-10 border rounded-xl w-full md:w-[75%] lg:w-[65%] shadow-[8px_8px_0_#CDE1FF]">

            <!-- Smaller pull-up on mobile so it doesn't overlap card above -->
            <div class="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 -mt-10 md:-mt-14 lg:-mt-16">
              <img :src="item.image" alt="" class="w-full h-full object-contain" />
            </div>

            <div class="flex flex-col gap-2 mt-2">
              <p class="text-black text-base md:text-lg font-semibold">
                {{ item.title }}
              </p>
              <p class="text-grey text-sm font-normal leading-relaxed">
                {{ item.tagline }}
              </p>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import earth from "@/assets/images/planet.svg";
import clock from "@/assets/images/watch.svg";
import rocket from "@/assets/images/rocket.svg";
import chat from "@/assets/images/chat.svg";
import light from "@/assets/images/light bulb.svg";

const items = [
  {
    image: earth,
    title: "Даем свободу выбора работать когда и где удобно",
    tagline: "Вам не нужно арендовать кабинет! Все сессии проходят онлайн, поэтому неважно, где находитесь вы и клиент, можно работать из любой точки мира.",
  },
  {
    image: clock,
    title: "Избавляем от рутины и поиска клиентов",
    tagline: "Еженедельно проводим супервизорские группы и интервизии. Регулярно проводим вебинары с приглашенными экспертами из разных направлений психотерапии.",
  },
  {
    image: rocket,
    title: "Развиваем и поддерживаем",
    tagline: "Кураторы сервиса оказывают оперативную поддержку по этическим и любым другим вопросам, возникающим в процессе работы с клиентом.",
  },
  {
    image: chat,
    title: "Профессиональное комьюнити",
    tagline: "YouMi — это не только комфортная работа, это сообщество профессионалов объединенных общей целью.",
  },
  {
    image: light,
    title: "Развиваем ваш личный бренд",
    tagline: "У нас есть свой блог и социальные сети. Наши психологи принимают активное участие в создании контента с указанием авторства.",
  },
];
</script>