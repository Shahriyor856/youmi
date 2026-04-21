<template>
  <div class="bg-[#F9FCFF]">
    <div class="container-main main-padding">
      <div class="flex justify-between items-center h-16">

        <!-- Logo: base size + one override at md -->
        <NuxtLink to="/">
          <img :src="logo" alt="Logo" class="w-20 md:w-28 h-auto object-contain" />
        </NuxtLink>

        <!-- Desktop nav: hidden on mobile, shown from md -->
        <div class="hidden md:flex items-center gap-6 lg:gap-10">
          <NuxtLink
            v-for="(item, index) in menuItems"
            :key="index"
            :to="item.route"
            class="text-[#4D4D52] text-sm font-medium transition hover:text-[#7872B9]"
            active-class="text-[#7872B9]"
          >
            {{ item.section }}
          </NuxtLink>

          <el-dropdown trigger="click" popper-class="custom-dropdown" @command="handleCommand">
            <div class="dropdown-trigger">
              Материалы
              <el-icon class="ml-1"><arrow-down /></el-icon>
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="/header/materials/materialsBlog">Блог</el-dropdown-item>
                <el-dropdown-item command="/header/materials/materialsSecond">Вебинары</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>

          <NuxtLink to="/header/profile">
            <BaseButton variant="outline">Личный кабинет</BaseButton>
          </NuxtLink>
        </div>

        <!-- Mobile hamburger: shown on mobile, hidden from md -->
        <button
          class="md:hidden p-2 text-[#4D4D52]"
          @click="mobileOpen = !mobileOpen"
          aria-label="Toggle menu"
        >
          <!-- X icon when open, hamburger when closed -->
          <svg v-if="mobileOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>

      </div>

      <!-- Mobile menu drawer: slides in below the navbar -->
      <div v-if="mobileOpen" class="md:hidden pb-4 flex flex-col gap-4">
        <NuxtLink
          v-for="(item, index) in menuItems"
          :key="index"
          :to="item.route"
          class="text-[#4D4D52] text-sm font-medium py-2 transition hover:text-[#7872B9]"
          active-class="text-[#7872B9]"
          @click="mobileOpen = false"
        >
          {{ item.section }}
        </NuxtLink>

        <span class="text-[#4D4D52] text-sm font-medium py-2 cursor-pointer hover:text-[#7872B9]"
          @click="handleMaterialsToggle">
          Материалы ▾
        </span>

        <div v-if="materialsOpen" class="pl-4 flex flex-col gap-3">
          <NuxtLink to="/header/materials/materialsBlog" class="text-sm text-[#4D4D52]" @click="mobileOpen = false">Блог</NuxtLink>
          <NuxtLink to="/header/materials/materialsSecond" class="text-sm text-[#4D4D52]" @click="mobileOpen = false">Вебинары</NuxtLink>
        </div>

        <NuxtLink to="/header/profile" @click="mobileOpen = false">
          <BaseButton variant="outline" class="w-full">Личный кабинет</BaseButton>
        </NuxtLink>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import logo from "@/assets/images/logo youmi 2.svg"
import BaseButton from "../ui/BaseButton.vue"
import menu from "@/constants/header.json"
import { ArrowDown } from "@element-plus/icons-vue"

interface MenuItem {
  section: string
  route: string
}

const menuItems = menu as MenuItem[]
const router = useRouter()
const mobileOpen = ref(false)
const materialsOpen = ref(false)

const handleCommand = (path: string) => router.push(path)
const handleMaterialsToggle = () => { materialsOpen.value = !materialsOpen.value }
</script> 