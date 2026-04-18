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

      <div>
        <el-segmented v-model="gender" :options="options">
          <template #default="scope">
            <div class="flex flex-col items-center gap-2 p-2">
              <div>{{ scope.item.label }}</div>
            </div>
          </template>
        </el-segmented>
      </div>

      <div class="flex flex-col gap-2">
        <label> Дата рождения </label>
        <div class="flex items-start gap-2">
          <input
            class="ui-input"
            type="number"
            v-model="day"
            placeholder="ДД"
          />
          <input
            class="ui-input"
            type="number"
            v-model="month"
            placeholder="ММ"
          />
          <input
            class="ui-input-year"
            type="number"
            v-model="year"
            placeholder="ГГГГ"
          />
        </div>
      </div>

      <ProfileInput
        v-model="Гражданство"
        label="Гражданство"
        :use-placeholder="true"
        placeholder="Гражданство"
      />

      <ProfileInput
        v-model="location"
        label="Страна и город проживания"
        :use-placeholder="true"
        placeholder="Страна и город проживания"
      />
      <ProfileInput
        v-model="number"
        label="Номер телефона для связи"
        :use-placeholder="true"
        placeholder="+7 (___)"
      />

      <ProfileInput
        v-model="email"
        label="Электронная почта"
        :use-placeholder="true"
        placeholder="Электронная почта"
      />
      <ProfileInput
        v-model="contect"
        label="Социальные сети"
        :use-placeholder="true"
        placeholder="Социальные сети"
      />

      <p class="text-center text-[#4D4D52]">
        Страницы в социальных сетях, личный сайт, блог, упоминание на сайтах
        конференций или профессиональных ассоциаций.
      </p>
    </div>

    <BaseButton link="/header/profile/profileSteps/stepTwo">
      Далее
    </BaseButton>

    <div class="flex gap-5">
      <img
        v-for="(dot, index) in dots"
        :key="index"
        :src="dot.image"
        alt="image"
        class="w-3 h-3 object-contain"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import logo from "@/assets/images/logo youmi 2.svg";
import ProfileInput from "~/components/ui/profileInput.vue";
import { ref } from "vue";
import BaseButton from "~/components/ui/BaseButton.vue";
import dot from "@/assets/images/dots/Ellipse 14.svg";
import dotTwo from "@/assets/images/dots/Ellipse 15.svg";

const day = ref("");
const month = ref("");
const year = ref("");
const gender = ref("Man");

const name = ref<string>("");
const Гражданство = ref<string>("");
const location = ref<string>("");
const number = ref<string>("");
const email = ref<string>("");
const contect = ref<string>("");

const options = [
  {
    label: "Муж",
    value: "Man",
  },
  {
    label: "Жен",
    value: "Woman",
  },
];

const dots = [
  {
    image: dot,
  },
  {
    image: dotTwo,
  },
  {
    image: dotTwo,
  },
  {
    image: dotTwo,
  },
  {
    image: dotTwo,
  },
];

const fullDate = computed(() => `${year.value}-${month.value}-${day.value}`);
</script>

<style scoped></style>
