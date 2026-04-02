<script setup lang="ts">
import HeaderUI from "../ui/headerUI.vue";
import image from "@/assets/images/Слой 2 (1).svg";
import ThreeCards from "../ui/threeCards.vue";
import globe from "@/assets/images/planet.svg";
import target from "@/assets/images/target.svg";
import check from "@/assets/images/check mark.svg";

const cards = [
  {
    image: globe,
    title: "Свобода возможностей",
    description:
      "Проходите сессию из любой точки мира, не тратьте время на дорогу",
  },
  {
    image: check,
    title: "Будьте уверены в своем выборе",
    description:
      "Мы работаем только с квалифицированными специалистами, которые прошли строгий отбор",
  },
  {
    image: target,
    title: "Ваш запрос важен",
    description: "Подберем опытного специалиста под ваш запрос",
  },
];
</script>

<template>
  <div class="bg-[#F9FCFF]">
    <div class="container-main main-padding">
      <HeaderUI :image-src="image" />
    </div>
  </div>
  <div class="container-main main-padding">
    <ThreeCards :cards="cards" />
  </div>
</template>
