<template>
  <div class="flex flex-col items-center gap-5">
    <ModulesMainPageQuestionPart
      v-model="activeFaq"
      :faq-list="faqData"
      title="Вопросы - ответы"
    />

    <BaseButton>Ещё</BaseButton>
  </div>
</template>

<script setup lang="ts">
import BaseButton from "~/components/ui/BaseButton.vue";

const faqData = [
  {
    name: "1",
    title: "Эффективно ли работать с психологом онлайн?",
    content:
      "Да, эффективно и уже является стандартной практикой во всем мире...",
  },
  {
    name: "2",
    title: "Как выбрать специалиста?",
    content: "Ответ на вопрос...",
  },
  {
    name: "3",
    title:
      "Чувствую, что мне нужна помощь, но не понимаю в чём проблема. Как быть?",
    content: "Ответ на вопрос...",
  },
  {
    name: "4",
    title: "Как вы отбираете психологов в базу?",
    content: "Ответ на вопрос...",
  },
  {
    name: "5",
    title: "В чем разница между психологом, психотерапевтом и психиатром?",
    content: "Ответ на вопрос...",
  },
  {
    name: "6",
    title: "Какое количество сессий мне необходимо, чтобы получить результат?",
    content: "Ответ на вопрос...",
  },
];

const activeFaq = ref(["1"]);
</script>
