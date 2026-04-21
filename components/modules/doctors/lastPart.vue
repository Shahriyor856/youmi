<script setup lang="ts">
import BaseButton from "~/components/ui/BaseButton.vue";
</script>

<template>
  <div
    class="container-main main-padding flex flex-col items-center gap-4 md:gap-5 text-center"
  >
    <h1 class="main-purple-text text-2xl md:text-3xl lg:text-4xl">
      Остались вопросы?
    </h1>

    <p class="font-medium text-base md:text-xl">
      Задайте их в чат поддержки психологов
    </p>

    <BaseButton variant="outline" class="w-full md:w-auto">
      @youmipsy
    </BaseButton>
  </div>
</template>
