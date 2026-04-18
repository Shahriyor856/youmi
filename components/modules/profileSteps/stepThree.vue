<template>
  <div class="container-main main-padding flex flex-col gap-10 items-center">
    <NuxtLink to="/">
      <div class="w-32">
        <img :src="logo" alt="Youmi" class="w-full h-auto object-contain" />
      </div>
    </NuxtLink>

    <div class="w-full max-w-md flex flex-col gap-5">
      <!-- Step label -->
      <div>
        <p class="text-[#7872B9] text-lg font-semibold leading-tight mb-2">
          Шаг 3 <br />
          Специализация
        </p>
      </div>

      <!-- Therapy approaches checkboxes -->
      <div class="flex flex-col gap-3">
        <p class="text-[#4D4D52] text-sm font-medium">
          В каком подходе вы работаете?
        </p>
        <p class="text-[#9D9DA5] text-xs">
          Выберите направления терапии в которых вы работаете и имеете
          дополнительную подготовку.
        </p>

        <div class="flex flex-col gap-2 mt-1">
          <label
            v-for="approach in therapyApproaches"
            :key="approach.value"
            class="flex items-start gap-3 cursor-pointer group"
          >
            <input
              type="checkbox"
              :value="approach.value"
              v-model="selectedApproaches"
              class="mt-0.5 w-4 h-4 accent-[#3B2F8F] cursor-pointer"
            />
            <span
              class="text-sm text-[#4D4D52] group-hover:text-[#3B2F8F] transition-colors"
            >
              {{ approach.label }}
            </span>
          </label>
        </div>
      </div>

      <!-- Training institution -->
      <div class="flex flex-col gap-3">
        <p class="text-[#4D4D52] text-sm font-medium">
          Где вы обучались/обучаетесь основному методу?
        </p>
        <p class="text-[#9D9DA5] text-xs">
          ВАЖНО: обязательно укажите количество часов. Без этого обучение не
          будет принято к рассмотрению.
        </p>

        <div
          v-for="(entry, index) in trainingEntries"
          :key="index"
          class="flex flex-col gap-4"
        >
          <UiInput
            v-model="entry.institution"
            label="Название образовательного учреждения"
            :use-placeholder="true"
            placeholder="Название образовательного учреждения"
          />

          <UiInput
            v-model="entry.program"
            label="Полное название программы"
            :use-placeholder="true"
            placeholder="Полное название программы"
          />

          <UiInput
            v-model="entry.hours"
            label="Количество часов обучения"
            :use-placeholder="true"
            placeholder="Количество часов"
          />

          <div class="flex gap-3">
            <UiInput
              v-model="entry.startYear"
              label="Год начала"
              :use-placeholder="true"
              placeholder="ГГГГ"
            />
            <UiInput
              v-model="entry.endYear"
              label="Год окончания"
              :use-placeholder="true"
              placeholder="ГГГГ"
            />
          </div>

          <button
            v-if="trainingEntries.length > 1"
            class="text-xs text-red-400 hover:text-red-600 self-end transition-colors"
            @click="removeTraining(index)"
          >
            Удалить
          </button>
        </div>

        <button
          class="flex items-center gap-2 text-[#7872B9] text-sm font-medium hover:text-[#3B2F8F] transition-colors self-start"
          @click="addTraining"
        >
          <span class="text-yellow-500 text-lg font-bold">+</span>
          Добавить информацию об образовании
        </button>
      </div>

      <!-- Document upload -->
      <div class="flex flex-col gap-2">
        <p class="text-[#4D4D52] text-sm font-medium">
          Документ об основном образовании
        </p>
        <p class="text-[#9D9DA5] text-xs">
          Загрузите диплом и приложение к нему со списком дисциплин и итоговую
          оценку, а также дополнительные документы об образовании по каждому
          методу.
        </p>

        <div class="flex flex-wrap gap-3 mt-1">
          <div
            v-for="(file, i) in uploadedFiles"
            :key="i"
            class="relative w-20 h-20 rounded-lg overflow-hidden border border-gray-200 bg-gray-50 flex items-center justify-center"
          >
            <img
              v-if="file.preview"
              :src="file.preview"
              alt="preview"
              class="w-full h-full object-cover"
            />
            <span v-else class="text-xs text-gray-400 text-center px-1">{{
              file.name
            }}</span>
            <button
              class="absolute top-0.5 right-0.5 bg-white rounded-full w-4 h-4 flex items-center justify-center shadow text-gray-400 hover:text-red-500 text-xs"
              @click="removeFile(i)"
            >
              ×
            </button>
          </div>

          <label
            class="w-20 h-20 rounded-lg border-2 border-dashed border-gray-300 hover:border-[#7872B9] flex items-center justify-center cursor-pointer transition-colors group"
          >
            <span
              class="text-2xl text-gray-300 group-hover:text-[#7872B9] transition-colors"
              >+</span
            >
            <input
              type="file"
              accept="image/*,application/pdf"
              multiple
              class="hidden"
              @change="handleFileUpload"
            />
          </label>
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <div class="flex gap-4 w-full max-w-md">
      <BaseButton variant="outline" link="/header/profile/profileSteps/stepTwo">
        Далее
      </BaseButton>
      <BaseButton link="/header/profile/profileSteps/stepFour">
        Далее
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

const therapyApproaches = [
  { label: "Гештальт терапия", value: "gestalt" },
  {
    label:
      "Когнитивно-поведенческая терапия (в том числе ACT / CFT / DBT / Схемотерапия)",
    value: "cbt",
  },
  {
    label: "Психодинамическая терапия (Психоаналитическая)",
    value: "psychodynamic",
  },
  { label: "Эмоционально-фокусированная терапия (EFT)", value: "eft" },
  { label: "Клиент-центрированная терапия", value: "client_centered" },
  { label: "Системная семейная терапия", value: "systemic_family" },
  { label: "Нарративная терапия", value: "narrative" },
  { label: "Экзистенциальная и логотерапия", value: "existential" },
  { label: "Краткосрочная терапия", value: "brief" },
  { label: "Гипнотерапия", value: "hypno" },
  { label: "МайндФулнесс", value: "mindfulness" },
  { label: "Другое", value: "other" },
];

const selectedApproaches = ref<string[]>([]);

interface TrainingEntry {
  institution: string;
  program: string;
  hours: string;
  startYear: string;
  endYear: string;
}

const trainingEntries = ref<TrainingEntry[]>([
  { institution: "", program: "", hours: "", startYear: "", endYear: "" },
]);

function addTraining() {
  trainingEntries.value.push({
    institution: "",
    program: "",
    hours: "",
    startYear: "",
    endYear: "",
  });
}

function removeTraining(index: number) {
  trainingEntries.value.splice(index, 1);
}

interface UploadedFile {
  name: string;
  preview: string | null;
}

const uploadedFiles = ref<UploadedFile[]>([]);

function handleFileUpload(event: Event) {
  const input = event.target as HTMLInputElement;
  if (!input.files) return;
  Array.from(input.files).forEach((file) => {
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        uploadedFiles.value.push({
          name: file.name,
          preview: e.target?.result as string,
        });
      };
      reader.readAsDataURL(file);
    } else {
      uploadedFiles.value.push({ name: file.name, preview: null });
    }
  });
  input.value = "";
}

function removeFile(index: number) {
  uploadedFiles.value.splice(index, 1);
}

const dots = [
  { image: dotTwo },
  { image: dotTwo },
  { image: dot },
  { image: dotTwo },
  { image: dotTwo },
];
</script>

<style scoped></style>
