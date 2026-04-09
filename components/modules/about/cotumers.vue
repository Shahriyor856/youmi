<template>
  <div class="bg-[#F9FCFF]">
    <div class="container-main main-padding">
      <div class="mx-auto flex flex-col items-center gap-20">
        <h1 class="main-purple-text text-center">История проекта</h1>

        <div
          class="w-full flex items-center justify-center gap-36"
          v-for="(item, index) in costumers"
          :key="index"
          :class="index % 2 !== 0 ? 'flex-row-reverse' : ''"
        >
          <div class="w-40 h-40 shrink-0">
            <img
              :src="item.image"
              alt="image"
              class="w-full h-full object-contain"
            />
          </div>
          <div class="flex flex-col max-w-lg">
            <div class="flex flex-col">
              <p class="text-[#FACD6E] text-5xl font-bold text-start">"</p>
              <p class="text-[grey]">
                {{ item.description }}
              </p>
              <p class="text-[#FACD6E] text-5xl font-bold text-end">"</p>
            </div>
            <div :class="index % 2 !== 0 ? 'text-start' : 'text-end'">
              <p class="text-[#7872B9] font-bold text-lg">
                {{ item.name }}
              </p>
              <p class="main-grey-text">{{ item.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import image from "@/assets/images/Mask group (1).svg";
import imageTwo from "@/assets/images/guy.svg";

const costumers = [
  {
    image: image,
    description:
      "Каждое наше действие основано на заботе о наших клиентах и психотерапевтах. Мы гарантируем защиту и тем, и другим.",
    name: "Мария Литвинова",
    role: "Соосновательница YouMi",
  },
  {
    image: imageTwo,
    description:
      "Наша миссия — сделать психотерапию понятной для каждого и убрать барьеры перед обращением за психологической помощью.",
    name: "Иван Никитин",
    role: "Сооснователь YouMi",
  },
];
</script>
