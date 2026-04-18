<template>
  <div class="container-main main-padding flex flex-col gap-10 items-center">
    <NuxtLink to="/">
      <div class="w-32">
        <img :src="logo" alt="Youmi" class="w-full h-auto object-contain" />
      </div>
    </NuxtLink>

    <!-- <div>
      <h1 class="text-3xl font-bold text-[#3B2F8F] text-center mb-2">
        Станьте частью команды YouMi
        <div class="w-[50%] h-1 bg-yellow-500 rounded translate-x-[100%]" />
      </h1>
    </div>

    <p class="text-[#4D4D52] text-base text-center max-w-md">
      Анкета включает в себя
      <span class="text-[#3B2F8F] font-semibold">5 этапов.</span> Пожалуйста,
      ответьте на вопросы и приготовьте заранее сканы ваших дипломов и
      сертификатов, они понадобятся вам в ходе заполнения.
    </p> -->

    <div class="w-full max-w-md flex flex-col gap-5">
      <!-- Step label -->
      <div>
        <p class="text-[#7872B9] text-lg font-semibold leading-tight mb-2">
          Шаг 2 <br />
          Образование
        </p>
      </div>

      <!-- Higher education question -->
      <div class="flex flex-col gap-3">
        <p class="text-[#4D4D52] text-sm">
          У вас есть законченное высшее психологическое либо психиатрическое
          образование?
        </p>
        <el-segmented v-model="hasEducation" :options="educationOptions">
          <template #default="scope">
            <div class="flex flex-col items-center gap-2 p-2">
              <div>{{ scope.item.label }}</div>
            </div>
          </template>
        </el-segmented>
      </div>

      <!-- Education details (shown when "Да" or "В процессе") -->
      <template v-if="hasEducation !== 'no'">
        <p class="text-[#4D4D52] text-sm">
          Какое у вас высшее образование?
          <span class="text-[#7872B9] text-xs block mt-1">
            Укажите высшее психологическое либо психиатрическое образование.
            Если вас несколько видов образования, вы можете добавить их, нажав
            кнопку "добавить".
          </span>
        </p>

        <!-- Education entries -->
        <div
          v-for="(edu, index) in educationEntries"
          :key="index"
          class="flex flex-col gap-4"
        >
          <UiInput
            v-model="edu.university"
            label="Название ВУЗа (полностью)"
            :use-placeholder="true"
            placeholder="Название ВУЗа"
          />

          <UiInput
            v-model="edu.faculty"
            label="Факультет"
            :use-placeholder="true"
            placeholder="Факультет"
          />

          <UiInput
            v-model="edu.specialty"
            label="Специальность"
            :use-placeholder="true"
            placeholder="Специальность"
          />

          <UiInput
            v-model="edu.degree"
            label="Степень"
            :use-placeholder="true"
            placeholder="Степень"
          />

          <div class="flex gap-3">
            <UiInput
              v-model="edu.startYear"
              label="Год начала"
              :use-placeholder="true"
              placeholder="ГГГГ"
            />
            <UiInput
              v-model="edu.endYear"
              label="Год окончания"
              :use-placeholder="true"
              placeholder="ГГГГ"
            />
          </div>

          <button
            v-if="educationEntries.length > 1"
            class="text-xs text-red-400 hover:text-red-600 self-end transition-colors"
            @click="removeEducation(index)"
          >
            Удалить
          </button>
        </div>

        <!-- Add more education -->
        <button
          class="flex items-center gap-2 text-[#7872B9] text-sm font-medium hover:text-[#3B2F8F] transition-colors self-start"
          @click="addEducation"
        >
          <span class="text-yellow-500 text-lg font-bold">+</span>
          Добавить информацию об образовании
        </button>

        <!-- Document upload -->
        <div class="flex flex-col gap-2">
          <p class="text-[#4D4D52] text-sm font-medium">
            Документ об основном образовании
          </p>
          <p class="text-[#9D9DA5] text-xs">
            Загрузите диплом и приложение к нему со списком дисциплин и итоговую
            оценку по каждому образованию.
          </p>

          <div class="flex flex-wrap gap-3 mt-1">
            <!-- Uploaded files preview -->
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

            <!-- Upload button -->
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
      </template>
    </div>

    <!-- Navigation buttons -->
    <div class="flex gap-4 w-full max-w-md">
      <BaseButton variant="outline" link="/header/profile"> Далее </BaseButton>
      <BaseButton link="/header/profile/profileSteps/stepThree">
        Далее
      </BaseButton>
    </div>

    <!-- Dots indicator -->
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

const hasEducation = ref<"yes" | "no" | "inProgress">("yes");

const educationOptions = [
  { label: "Да", value: "yes" },
  { label: "Нет", value: "no" },
  { label: "Нахожусь в процессе получения ВО", value: "inProgress" },
];

interface EducationEntry {
  university: string;
  faculty: string;
  specialty: string;
  degree: string;
  startYear: string;
  endYear: string;
}

const educationEntries = ref<EducationEntry[]>([
  {
    university: "",
    faculty: "",
    specialty: "",
    degree: "",
    startYear: "",
    endYear: "",
  },
]);

function addEducation() {
  educationEntries.value.push({
    university: "",
    faculty: "",
    specialty: "",
    degree: "",
    startYear: "",
    endYear: "",
  });
}

function removeEducation(index: number) {
  educationEntries.value.splice(index, 1);
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
    const isImage = file.type.startsWith("image/");
    if (isImage) {
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

  // Reset input so same file can be re-selected
  input.value = "";
}

function removeFile(index: number) {
  uploadedFiles.value.splice(index, 1);
}

const dots = [
  { image: dotTwo },
  { image: dot },
  { image: dotTwo },
  { image: dotTwo },
  { image: dotTwo },
];
</script>

<style scoped></style>
