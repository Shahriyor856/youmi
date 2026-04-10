<script setup lang="ts">
import HeaderUI from "~/components/ui/headerUI.vue";
import imageHeader from "@/assets/images/illustr psycho 1.svg";
</script>

<template>
  <HeaderUI
    :image-src="imageHeader"
    tagline="Практикуйте онлайн из любой точки мира"
    title="Определяйте свою нагрузку самостоятельно, имея компьютер и стабильный интернет"
    :show-price="false"
    button-text="Начать практику в YouMi"
  />

  <ModulesDoctorsFirstPart />

  <ModulesDoctorsSecondPart />
  <ModulesDoctorsThirdPart />
</template>
