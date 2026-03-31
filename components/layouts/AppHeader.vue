<template>
  <div class="bg-[#F9FCFF]">
    <div class="container-main mian-padding">
      <div class="flex justify-between items-center">
        <NuxtLink to="/">
          <div class="w-32">
            <img :src="logo" alt="image" class="w-full h-auto object-contain" />
          </div>
        </NuxtLink>
        <div class="flex justify-center gap-12">
          <div
            class="flex items-center gap-12"
            v-for="(item, index) in menu"
            :key="index"
          >
            <NuxtLink :to="item.route">
              <p class="text-[#4D4D52] font-semibold">{{ item.section }}</p>
            </NuxtLink>
          </div>
          <BaseButton variant="outline"> Личный кабинет </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import logo from "@/assets/images/logo youmi 2.svg";
import BaseButton from "../ui/BaseButton.vue";

import menu from "@/constants/header.json";
</script>
