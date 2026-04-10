<script setup lang="ts">
import image from "@/assets/images/Слой 2 (1).svg";
import globe from "@/assets/images/planet.svg";
import target from "@/assets/images/target.svg";
import check from "@/assets/images/check mark.svg";

const cardsTwo = [
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
  <UiHeaderUI :image-src="image" />
  <UiThreeCards
    :cards="cardsTwo"
    main-title="Онлайн-психотерапия становится комфортнее"
  />
  <ModulesMainPageCarusel />
  <ModulesMainPageFourTable
    title="Мы работаем только с"
    text="квалифицированными специалистами, которые прошли наш строгий отбор"
    text-t wo="Помимо серии собеседований и испытаний по разработанной нами методологии, психологи предоставляют необходимые документы:"
  />
  <ModulesMainPageStepsPart />
  <ModulesMainPageQuestionPart />
  <ModulesMainPageStore />
  <ModulesMainPageNumbers />
</template>
