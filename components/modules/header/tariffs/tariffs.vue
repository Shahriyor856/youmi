<template>
  <UiHeaderUI
    :image-src="tarrifs"
    button-text="Узнать больше"
    title="Оплачивая пакет от 4 сессий вы получаете доступ к приложению."
    :show-price="false"
    tagline="Выберите количество сессий, которое вы хотите оплатить. "
  />
  <ModulesTariffsTarrifsTable />
  <ModulesMainPageStore :use-button="true" :use-button-two="false" />

  <ModulesTariffsHeaderUIPart />
  <ModulesTariffsSteps />
</template>

<script setup lang="ts">
import tarrifs from "@/assets/images/tarrifs.svg";
</script>
