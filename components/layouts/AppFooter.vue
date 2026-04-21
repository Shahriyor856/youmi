<template>
  <div class="bg-[#F9FCFF]">
    <div class="container-main main-padding">
      <!--
        Mobile:  2-column grid (logo+socials span full width, then pairs)
        Tablet:  3-column grid
        Desktop: 5-column grid (original layout)
      -->
      <div
        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6"
      >
        <!-- Col 1: Logo + social icons -->
        <div class="col-span-2 md:col-span-1 flex flex-col gap-6">
          <div class="w-28 md:w-32 lg:w-36">
            <img
              :src="logo"
              alt="YouMi logo"
              class="object-contain w-full h-auto"
            />
          </div>
          <div class="flex gap-4">
            <div class="w-8 h-8">
              <img
                :src="telegram"
                alt="Telegram"
                class="object-contain w-full h-auto"
              />
            </div>
            <div class="w-8 h-8">
              <img
                :src="vk"
                alt="ВКонтакте"
                class="object-contain w-full h-auto"
              />
            </div>
            <div class="w-8 h-8">
              <img
                :src="dzen"
                alt="Дзен"
                class="object-contain w-full h-auto"
              />
            </div>
          </div>
        </div>

        <!-- Col 2: Contacts -->
        <div class="flex flex-col gap-2">
          <p class="text-[#4D4D52] text-sm font-light">Сотрудничество</p>
          <p class="text-[#7872B9] text-base md:text-lg font-semibold">
            @youmiwork
          </p>
          <p class="text-[#4D4D52] text-sm font-light mt-2">
            Поддержка клиентов
          </p>
          <p class="text-[#7872B9] text-base md:text-lg font-semibold">
            @youmi
          </p>
        </div>

        <!-- Col 3: Nav links -->
        <div class="flex flex-col gap-3 md:gap-4">
          <p class="text-[#7872B9] text-base md:text-lg font-semibold">О нас</p>
          <p class="text-[#7872B9] text-base md:text-lg font-semibold">
            Тарифы
          </p>
          <p class="text-[#7872B9] text-base md:text-lg font-semibold">
            Психологам
          </p>
        </div>

        <!-- Col 4: More nav links -->
        <div class="flex flex-col gap-3 md:gap-4">
          <p class="text-[#7872B9] text-base md:text-lg font-semibold">Блог</p>
          <p class="text-[#7872B9] text-base md:text-lg font-semibold">
            Вопрос — ответ
          </p>
          <p class="text-[#7872B9] text-base md:text-lg font-semibold">
            Контакты
          </p>
        </div>

        <!-- Col 5: Legal links -->
        <div class="col-span-2 md:col-span-1 flex flex-col gap-3 md:gap-4">
          <a
            href="#"
            class="text-[#4D4D52] text-sm font-light underline hover:text-[#7872B9] transition"
          >
            Обработка персональных данных
          </a>
          <a
            href="#"
            class="text-[#4D4D52] text-sm font-light underline hover:text-[#7872B9] transition"
          >
            Пользовательское соглашение
          </a>
          <a
            href="#"
            class="text-[#4D4D52] text-sm font-light underline hover:text-[#7872B9] transition"
          >
            Юридические документы
          </a>
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
