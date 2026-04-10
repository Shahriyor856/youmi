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

  <div class="container-main main-padding">
    <HeaderUI
      :image-src="image"
      :show-button="false"
      :show-title="false"
      :show-first-black-text="true"
      first-black-text="Реферальная программа"
      price-text="С помощью реферальной программы вы можете приглашать своих друзей по вашей индивидуальной ссылке и получать 500 рублей за каждого, кто пройдет первую сессию.
Деньги поступают на ваш баланс, с которого вы можете оплачивать сесии."
      tagline="Позаботьтесь о других"
    />
  </div>
  <ModulesTariffsSteps />
</template>

<script setup lang="ts">
import tarrifs from "@/assets/images/tarrifs.svg";
import HeaderUI from "~/components/ui/headerUI.vue";
import image from "@/assets/images/illusr ref prog 1.svg";
</script>
