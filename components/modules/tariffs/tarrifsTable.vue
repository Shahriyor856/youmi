<script setup lang="ts">
import BaseButton from "~/components/ui/BaseButton.vue";

const tariffs = [
  {
    number: "1 сесия",
    price: "2 800₽",
    title: "за сессию",
    buttonText: "Оплатить2 900₽",
    text: "В рассрочку",
    profit: "выгода 1 200₽",
  },
  {
    number: "1 сесия",
    price: "2 800₽",
    title: "за сессию",
    buttonText: "Оплатить2 900₽",
  },
  {
    number: "1 сесия",
    price: "2 800₽",
    title: "за сессию",
    buttonText: "Оплатить2 900₽",
    text: "В рассрочку",
    profit: "выгода 1 200₽",
  },
  {
    number: "1 сесия",
    price: "2 800₽",
    title: "за сессию",
    buttonText: "Оплатить2 900₽",
  },
  {
    number: "1 сесия",
    price: "2 800₽",
    title: "за сессию",
    buttonText: "Оплатить2 900₽",
    text: "В рассрочку",
    profit: "выгода 1 200₽",
  },
  {
    number: "1 сесия",
    price: "2 800₽",
    title: "за сессию",
    buttonText: "Оплатить2 900₽",
    text: "В рассрочку",
    profit: "выгода 1 200₽",
  },
  {
    number: "1 сесия",
    price: "2 800₽",
    title: "за сессию",
    buttonText: "Оплатить2 900₽",
  },
  {
    number: "1 сесия",
    price: "2 800₽",
    title: "за сессию",
    buttonText: "Оплатить2 900₽",
    profit: "выгода 1 200₽",
  },
];
</script>

<template>
  <div class="container-main main-padding flex flex-col gap-10">
    <h1 class="text-center main-purple-text">Тарифы</h1>
    <div class="grid grid-cols-4 gap-5">
      <div class="flex flex-col" v-for="(item, index) in tariffs" :key="index">
        <div class="bg-[#EBF5FF] py-2 rounded-t-xl border border-b-0">
          <p class="text-center">{{ item.number }}</p>
        </div>
        <div
          class="bg-[#F9FCFF] flex flex-col gap-4 py-4 rounded-b-xl border h-full"
        >
          <div class="text-center">
            <p class="text-[#7872B9] text-xl font-semibold">{{ item.price }}</p>
            <p class="text-[#7872B9]">{{ item.title }}</p>
          </div>
          <div class="w-full px-5">
            <button
              class="bg-[#7872B9] py-2 px-14 rounded-lg text-white w-full"
            >
              <p class="text-sm font-semibold">{{ item.buttonText }}</p>
            </button>
          </div>
          <div v-if="item.text" class="w-full px-5">
            <button
              class="bg-[#F1E6F7] py-2 px-10 rounded-lg text-[#4D4D52] w-full"
            >
              <p class="text-sm font-semibold">{{ item.text }}</p>
            </button>
          </div>
          <p v-if="item.profit" class="text-[#7872B9] text-center">
            {{ item.profit }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
