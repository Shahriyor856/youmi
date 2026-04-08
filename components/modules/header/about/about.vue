<template>
  <UiHeaderUI
    :image-src="image"
    :show-title="false"
    :show-price="false"
    :show-button="false"
    tagline="В YouMi вы не одни Вместе мы справимся"
  />
  <UiThreeCards main-title="Наши ценности" :cards="items" />
  <ModulesAboutSpecialists />
  <ModulesMainPageFourTable
    title="Помимо серии собеседований и испытаний по разработанной нами методологии, психологи предоставляют"
    text="необходимые документы:"
  />

  <ModulesAboutCotumers />
</template>

<script setup lang="ts">
import image from "@/assets/images/person.svg";
import rocket from "@/assets/images/rocket.svg";
import bulb from "@/assets/images/light bulb.svg";
import chat from "@/assets/images/chat.svg";

const items = [
  {
    image: rocket,
    title: "Вместе мы справимся",
    description:
      "Мы всегда рядом. Свяжитесь с психологом в любое время и получите необходимую помощь.",
  },
  {
    image: chat,
    title: "Забота на расстоянии",
    description:
      "Мы позаботились о том, чтобы вы чувствовали нашу поддержу постоянно. Для этого мы создали приложение с виртуальным психологом.",
  },
  {
    image: bulb,
    title: "Думаем о важном",
    description:
      "Займитесь главным, а напоминание о предстоящих сессиях мы взяли на себя.",
  },
];
</script>
