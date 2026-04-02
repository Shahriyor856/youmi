<template>
  <div class="bg-[#F9FCFF]">
    <div class="container-main main-padding">
      <div class="flex justify-between">
        <div class="flex flex-col gap-6">
          <div class="w-36">
            <img :src="logo" alt="image" class="object-contain w-full h-auto" />
          </div>
          <div class="flex justify-between max-w-40">
            <div class="w-8">
              <img
                :src="telegram"
                alt="image"
                class="object-contain w-full h-auto"
              />
            </div>
            <div class="w-8">
              <img :src="vk" alt="image" class="object-contain w-full h-auto" />
            </div>
            <div class="w-8">
              <img
                :src="dzen"
                alt="image"
                class="object-contain w-full h-auto"
              />
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-[#4D4D52] font-light">Сотрудничество</p>
          <p class="text-[#7872B9] text-lg font-semibold">@youmiwork</p>
          <p class="text-[#4D4D52] font-light">Поддержка клиентов</p>
          <p class="text-[#7872B9] text-lg font-semibold">@youmi</p>
        </div>
        <div class="flex flex-col gap-4">
          <p class="text-[#7872B9] text-lg font-semibold">О нас</p>
          <p class="text-[#7872B9] text-lg font-semibold">Тарифы</p>
          <p class="text-[#7872B9] text-lg font-semibold">Психологам</p>
        </div>
        <div class="flex flex-col gap-4">
          <p class="text-[#7872B9] text-lg font-semibold">Блог</p>
          <p class="text-[#7872B9] text-lg font-semibold">Вопрос - ответ.</p>
          <p class="text-[#7872B9] text-lg font-semibold">Контакты</p>
        </div>
        <div class="flex flex-col gap-4">
          <a href="#" class="text-[#4D4D52] font-light font-sm underline"
            >Обработка персональных данных</a
          >
          <a href="#" class="text-[#4D4D52] font-light font-sm underline"
            >Пользовательское соглашение</a
          >
          <a href="#" class="text-[#4D4D52] font-light font-sm underline"
            >Юридические документы</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import logo from "@/assets/images/logo youmi 2.svg";
import telegram from "@/assets/icons/telegram.svg";
import vk from "@/assets/icons/vk.svg";
import dzen from "@/assets/icons/dzen.svg";
</script>
