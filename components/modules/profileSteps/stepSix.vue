<template>
  <div class="container-main main-padding flex items-center justify-center">
    <div
      class="w-full rounded-2xl px-10 py-14 flex flex-col justify-center items-center gap-6"
    >
      <!-- Logo -->
      <NuxtLink to="/">
        <div class="flex items-center gap-2">
          <img :src="logo" alt="Youmi" class="h-8 w-auto object-contain" />
        </div>
      </NuxtLink>

      <!-- Content row -->
      <div class="flex items-center gap-40 mt-4">
        <!-- Text -->
        <div class="flex flex-col gap-2 flex-1">
          <h2 class="text-2xl font-bold text-[#3B2F8F] leading-snug">
            Спасибо! Ваша анкета<br />успешно отправлена.
          </h2>
          <p class="text-[#4D4D52] text-sm">
            Средний срок ожидания ответа 5-7 дней.
          </p>
        </div>

        <!-- Telegram plane illustration -->
        <div class="w-40 h-40">
          <img
            :src="telegram"
            alt="image"
            class="w-full h-full object-contain"
          />
        </div>
      </div>

      <!-- Button -->
      <NuxtLink to="/" class="mt-2">
        <button
          class="px-10 py-3 rounded-xl bg-[#3B2F8F] text-white font-semibold text-sm hover:bg-[#2e246e] transition-colors"
        >
          На главную
        </button>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import logo from "@/assets/images/logo youmi 2.svg";
import telegram from "@/assets/images/paper airplane.svg";
</script>

<style scoped></style>
