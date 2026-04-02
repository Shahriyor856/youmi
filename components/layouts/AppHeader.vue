<template>
  <div class="bg-[#F9FCFF]">
    <div class="container-main main-padding">
      <div class="flex justify-between items-center">
        <NuxtLink to="/">
          <div class="w-32">
            <img :src="logo" alt="image" class="w-full h-auto object-contain" />
          </div>
        </NuxtLink>
        <div class="flex justify-center gap-12">
          <div
            class="flex items-center gap-12"
            v-for="(item, index) in menuItems"
            :key="index"
          >
            <NuxtLink
              :to="{ path: item.route }"
              class="text-[#4D4D52] font-semibold transition hover:text-[#7872B9]"
              active-class=" text-[#7872B9]"
            >
              {{ item.section }}
            </NuxtLink>
          </div>
          <NuxtLink to="/header/profile">
            <BaseButton variant="outline"> Личный кабинет </BaseButton>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import logo from "@/assets/images/logo youmi 2.svg";
import BaseButton from "../ui/BaseButton.vue";
import menu from "@/constants/header.json";

interface MenuItem {
  section: string;
  route: string;
}

const menuItems = menu as MenuItem[];
</script>
