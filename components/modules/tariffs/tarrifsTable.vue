<script setup lang="ts">
import BaseButton from "~/components/ui/BaseButton.vue";
import BaseInput from "~/components/ui/BaseInput.vue";

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
  <div class="container-main main-padding flex flex-col gap-8 md:gap-10">
    <h1 class="text-center main-purple-text text-2xl md:text-3xl lg:text-4xl">
      Тарифы
    </h1>

    <!-- 1 col mobile → 2 col tablet → 4 col desktop -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      <div
        class="flex flex-col active:translate-y-[1px] hover:scale-105 duration-500"
        v-for="(item, index) in tariffs"
        :key="index"
      >
        <!-- Card header -->
        <div class="bg-[#EBF5FF] py-2 rounded-t-xl border border-b-0">
          <p class="text-center text-sm md:text-base">{{ item.number }}</p>
        </div>

        <!-- Card body -->
        <div
          class="bg-[#F9FCFF] flex flex-col gap-4 py-4 rounded-b-xl border h-full"
        >
          <div class="text-center">
            <p class="text-[#7872B9] text-lg md:text-xl font-semibold">
              {{ item.price }}
            </p>
            <p class="text-[#7872B9] text-sm md:text-base">{{ item.title }}</p>
          </div>

          <div class="w-full px-4">
            <!-- px-4 instead of px-14 — button fills card width -->
            <button
              class="bg-[#7872B9] py-2 rounded-lg text-white w-full active:translate-y-[2px] active:translate-x-[2px] duration-100"
            >
              <p class="text-sm font-semibold">{{ item.buttonText }}</p>
            </button>
          </div>

          <div v-if="item.text" class="w-full px-4">
            <button
              class="bg-[#F1E6F7] py-2 rounded-lg text-[#4D4D52] w-full active:translate-y-[2px] active:translate-x-[2px] duration-100"
            >
              <p class="text-sm font-semibold">{{ item.text }}</p>
            </button>
          </div>

          <p
            v-if="item.profit"
            class="text-[#7872B9] text-center text-sm md:text-base"
          >
            {{ item.profit }}
          </p>
        </div>
      </div>
    </div>

    <!-- Input + button: constrain width on larger screens -->
    <div
      class="flex flex-col gap-4 justify-center items-center w-full md:max-w-sm md:mx-auto"
    >
      <BaseInput class="w-full" />
      <BaseButton class="w-full md:w-auto">Отправить</BaseButton>
    </div>
  </div>
</template>
