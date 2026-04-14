<template>
  <div class="container-main main-padding">
    <HeaderUI
      :image-src="image"
      :show-title="false"
      :show-first-black-text="false"
      price-text="Отправьте заявку, пройдите отбор, выберите часы в расписании и начните терапию."
      button-text="Оставить заявку"
    />
  </div>
</template>

<script setup lang="ts">
import image from "@/assets/images/woman.svg";
import HeaderUI from "~/components/ui/headerUI.vue";
</script>
