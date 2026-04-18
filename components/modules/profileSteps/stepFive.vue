<template>
  <div class="container-main main-padding flex flex-col gap-10 items-center">
    <NuxtLink to="/">
      <div class="w-32">
        <img :src="logo" alt="Youmi" class="w-full h-auto object-contain" />
      </div>
    </NuxtLink>

    <div class="w-full max-w-md flex flex-col gap-6">
      <!-- Step label -->
      <div>
        <p class="text-[#7872B9] text-lg font-semibold leading-tight mb-2">
          Шаг 5 <br />
          Дополнительные вопросы
        </p>
      </div>

      <!-- Work format and pricing -->
      <div class="flex flex-col gap-3">
        <p class="text-[#4D4D52] text-sm font-medium">
          Укажите ваш формат работы и стоимость приёма на данный момент
        </p>

        <div class="flex flex-col gap-2">
          <label
            v-for="format in workFormats"
            :key="format.value"
            class="flex items-center gap-3 cursor-pointer group"
          >
            <input
              type="checkbox"
              :value="format.value"
              v-model="selectedFormats"
              class="w-4 h-4 accent-[#3B2F8F] cursor-pointer"
            />
            <span
              class="text-sm text-[#4D4D52] flex-1 group-hover:text-[#3B2F8F] transition-colors"
            >
              {{ format.label }}
            </span>
            <div class="flex items-center gap-1">
              <UiInput
                v-model="format.price"
                :use-placeholder="true"
                placeholder=""
                class="w-24"
              />
              <span class="text-sm text-[#9D9DA5]">₽</span>
            </div>
          </label>
        </div>
      </div>

      <!-- Other jobs -->
      <div class="flex flex-col gap-2">
        <p class="text-[#4D4D52] text-sm font-medium">
          Есть ли другая у вас работа кроме психотерапевтической практики?
        </p>
        <el-segmented v-model="hasOtherJob" :options="yesNoOptions">
          <template #default="scope">
            <div class="flex items-center p-2">{{ scope.item.label }}</div>
          </template>
        </el-segmented>
      </div>

      <!-- Hours available per week slider -->
      <div class="flex flex-col gap-3">
        <p class="text-[#4D4D52] text-sm font-medium">
          Сколько часов в неделю вы готовы уделить работе в YouMi?
        </p>
        <div class="flex flex-col gap-2">
          <input
            type="range"
            v-model="hoursPerWeek"
            min="2"
            max="30"
            step="1"
            class="w-full accent-[#3B2F8F]"
          />
          <div class="flex justify-between text-xs text-[#9D9DA5]">
            <span>2</span>
            <span class="text-[#3B2F8F] font-semibold">{{ hoursPerWeek }}</span>
            <span>30</span>
          </div>
        </div>
      </div>

      <!-- Free-form text -->
      <div class="flex flex-col gap-2">
        <p class="text-[#4D4D52] text-sm font-medium">
          Что на ваш взгляд нам нужно узнать о вас, чтобы понять, какой вы
          специалист? Расскажите о себе в свободной форме
        </p>
        <p class="text-[#9D9DA5] text-xs">
          Это может быть ваша специализация, образование, ценности, причины, по
          которым вы хотите работать в YouMi, подходы к работе с клиентами или
          другая информация.
        </p>
        <textarea
          v-model="freeText"
          rows="5"
          class="w-full px-3 py-2.5 text-sm rounded-lg border border-gray-300 outline-none resize-none transition-all duration-150 hover:border-gray-400 focus:border-violet-400"
          placeholder=""
        />
      </div>
    </div>

    <!-- Navigation -->
    <div class="flex gap-4 w-full max-w-md">
      <BaseButton
        variant="outline"
        link="/header/profile/profileSteps/stepThree"
      >
        Далее
      </BaseButton>
      <BaseButton link="/header/profile/profileSteps/stepSix">
        Сохранить
      </BaseButton>
    </div>

    <!-- Dots -->
    <div class="flex gap-5">
      <img
        v-for="(dot, index) in dots"
        :key="index"
        :src="dot.image"
        alt="dot"
        class="w-3 h-3 object-contain"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import logo from "@/assets/images/logo youmi 2.svg";
import UiInput from "@/components/ui/profileInput.vue";
import { ref } from "vue";
import dot from "@/assets/images/dots/Ellipse 14.svg";
import dotTwo from "@/assets/images/dots/Ellipse 15.svg";
import BaseButton from "~/components/ui/BaseButton.vue";

interface WorkFormat {
  label: string;
  value: string;
  price: string;
}

const workFormats = ref<WorkFormat[]>([
  { label: "Очно", value: "offline", price: "" },
  { label: "Онлайн", value: "online", price: "" },
  { label: "С родными и сверниками", value: "family", price: "" },
]);

const selectedFormats = ref<string[]>([]);
const hasOtherJob = ref<"yes" | "no">("yes");
const hoursPerWeek = ref(5);
const freeText = ref("");

const yesNoOptions = [
  { label: "Да", value: "yes" },
  { label: "Нет", value: "no" },
];

const dots = [
  { image: dotTwo },
  { image: dotTwo },
  { image: dotTwo },
  { image: dotTwo },
  { image: dot },
];
</script>

<style scoped></style>
