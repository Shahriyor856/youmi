<template>
  <div class="container-main main-padding flex flex-col gap-10 items-center">
    <NuxtLink to="/">
      <div class="w-32">
        <img :src="logo" alt="Youmi" class="w-full h-auto object-contain" />
      </div>
    </NuxtLink>
    <div>
      <h1 class="text-3xl font-bold text-[#3B2F8F] text-center mb-2">
        Станьте частью команды YouMi
        <div class="w-[50%] h-1 bg-yellow-500 rounded translate-x-[100%]" />
      </h1>
    </div>

    <p class="text-[#4D4D52] text-base text-center max-w-md">
      Анкета включает в себя
      <span class="text-[#3B2F8F] font-semibold">5 этапов.</span> Пожалуйста,
      ответьте на вопросы и приготовьте заранее сканы ваших дипломов
      и сертификатов, они понадобятся вам в ходе заполнения.
    </p>

    <div class="w-full max-w-md flex flex-col gap-5">
      <div>
        <p class="text-[#7872B9] text-lg font-semibold leading-tight mb-6">
          Шаг 1 <br />
          Личные данные
        </p>
      </div>

      <ProfileInput
        v-model="name"
        label="ФИО"
        :use-placeholder="true"
        placeholder="Иванова Анна Дмитриевна"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import logo from "@/assets/images/logo youmi 2.svg";
import ProfileInput from "~/components/ui/profileInput.vue";

const name = ref<string>("");
</script>
