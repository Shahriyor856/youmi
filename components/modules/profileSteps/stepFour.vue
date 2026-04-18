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
          Шаг 4 <br />
          Профессиональные данные
        </p>
      </div>

      <!-- Years in private practice -->
      <div class="flex flex-col gap-1.5">
        <p class="text-[#4D4D52] text-sm font-medium">
          Сколько лет вы консультируете в рамках частной практики или работы в
          компании?
        </p>
        <p class="text-[#9D9DA5] text-xs">
          Учитывается опыт, при котором консультируете взрослых и/или подростков
          с любой патологией.
        </p>
        <UiInput
          v-model="yearsPrivate"
          :use-placeholder="true"
          placeholder=""
        />
      </div>

      <!-- Online experience -->
      <div class="flex flex-col gap-2">
        <p class="text-[#4D4D52] text-sm font-medium">
          Есть ли у вас опыт работы онлайн?
        </p>
        <el-segmented v-model="hasOnlineExp" :options="yesNoOptions">
          <template #default="scope">
            <div class="flex items-center p-2">{{ scope.item.label }}</div>
          </template>
        </el-segmented>
      </div>

      <!-- If yes, how many years -->
      <div v-if="hasOnlineExp === 'yes'" class="flex flex-col gap-1.5">
        <p class="text-[#4D4D52] text-sm font-medium">
          Если да, то сколько лет из общего опыта?
        </p>
        <UiInput v-model="yearsOnline" :use-placeholder="true" placeholder="" />
      </div>

      <!-- Current clients count -->
      <div class="flex flex-col gap-1.5">
        <p class="text-[#4D4D52] text-sm font-medium">
          Сколько клиентов в настоящий момент у вас в терапии?
        </p>
        <p class="text-[#9D9DA5] text-xs">
          Укажите примерное количество клиентов, которых консультируете сейчас
          или за последний месяц.
        </p>
        <UiInput
          v-model="currentClients"
          :use-placeholder="true"
          placeholder=""
        />
      </div>

      <!-- Long-term clients percentage -->
      <div class="flex flex-col gap-1.5">
        <p class="text-[#4D4D52] text-sm font-medium">
          Сколько примерно таких среди длительной терапии среди ваших клиентов?
        </p>
        <p class="text-[#9D9DA5] text-xs">Примерное количество часов</p>
        <UiInput
          v-model="longTermClients"
          :use-placeholder="true"
          placeholder=""
        />
      </div>

      <!-- Personal therapy -->
      <div class="flex flex-col gap-2">
        <p class="text-[#4D4D52] text-sm font-medium">
          Проходите ли вы личную терапию?
        </p>
        <el-segmented
          v-model="personalTherapy"
          :options="personalTherapyOptions"
        >
          <template #default="scope">
            <div class="flex items-center p-2">{{ scope.item.label }}</div>
          </template>
        </el-segmented>
      </div>

      <!-- Personal therapy hours -->
      <div class="flex flex-col gap-1.5">
        <p class="text-[#4D4D52] text-sm font-medium">
          Сколько часов личной терапии вы прошли?
        </p>
        <p class="text-[#9D9DA5] text-xs">
          Укажите суммарное количество всех сессий (без учёта возможных пауз).
        </p>
        <UiInput
          v-model="personalTherapyHours"
          :use-placeholder="true"
          placeholder=""
        />
      </div>

      <!-- Therapist approach -->
      <div class="flex flex-col gap-1.5">
        <p class="text-[#4D4D52] text-sm font-medium">
          В каком подходе работал ваш терапевт?
        </p>
        <UiInput
          v-model="therapistApproach"
          :use-placeholder="true"
          placeholder=""
        />
      </div>

      <!-- Supervision -->
      <div class="flex flex-col gap-2">
        <p class="text-[#4D4D52] text-sm font-medium">
          Проходите ли вы супервизию?
        </p>
        <el-segmented v-model="hasSuperVision" :options="supervisionOptions">
          <template #default="scope">
            <div class="flex items-center p-2">{{ scope.item.label }}</div>
          </template>
        </el-segmented>
      </div>

      <!-- Supervision hours -->
      <div class="flex flex-col gap-1.5">
        <p class="text-[#4D4D52] text-sm font-medium">
          Сколько часов супервизии вы прошли?
        </p>
        <p class="text-[#9D9DA5] text-xs">
          Укажите суммарное количество всех сессий супервизии (до 144 и больше
          часов).
        </p>
        <UiInput
          v-model="supervisionHours"
          :use-placeholder="true"
          placeholder=""
        />
      </div>

      <!-- Supervisor approach -->
      <div class="flex flex-col gap-1.5">
        <p class="text-[#4D4D52] text-sm font-medium">
          В каком подходе работал ваш супервизор?
        </p>
        <UiInput
          v-model="supervisorApproach"
          :use-placeholder="true"
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
      <BaseButton link="/header/profile/profileSteps/stepFive">
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

const yearsPrivate = ref("");
const hasOnlineExp = ref<"yes" | "no">("yes");
const yearsOnline = ref("");
const currentClients = ref("");
const longTermClients = ref("");
const personalTherapy = ref("yes");
const personalTherapyHours = ref("");
const therapistApproach = ref("");
const hasSuperVision = ref("yes");
const supervisionHours = ref("");
const supervisorApproach = ref("");

const yesNoOptions = [
  { label: "Да", value: "yes" },
  { label: "Нет", value: "no" },
];

const personalTherapyOptions = [
  { label: "Да", value: "yes" },
  { label: "Нет", value: "no" },
  { label: "Не прохожу, но планирую", value: "planned" },
];

const supervisionOptions = [
  { label: "Да", value: "yes" },
  { label: "Нет", value: "no" },
  { label: "Не прохожу, но планирую", value: "planned" },
];

const dots = [
  { image: dotTwo },
  { image: dotTwo },
  { image: dotTwo },
  { image: dot },
  { image: dotTwo },
];
</script>

<style scoped></style>
