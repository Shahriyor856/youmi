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
          <el-dropdown
            trigger="click"
            popper-class="custom-dropdown"
            @command="handleCommand"
          >
            <div class="dropdown-trigger">
              Материалы
              <el-icon class="ml-1 transition-transform">
                <arrow-down />
              </el-icon>
            </div>

            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="/header/materials/materialsBlog">
                  Блог
                </el-dropdown-item>

                <el-dropdown-item command="/header/materials/materialsSecond">
                  Вебинары
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>

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
import { ArrowDown } from "@element-plus/icons-vue";

interface MenuItem {
  section: string;
  route: string;
}

const menuItems = menu as MenuItem[];

const router = useRouter();

const handleCommand = (path: string) => {
  router.push(path);
};
</script>

<style scoped>
.dropdown-trigger {
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  color: #4d4d52;
  cursor: pointer;
  transition: 0.2s;
}

.dropdown-trigger:hover {
  color: #7872b9;
}

.custom-dropdown {
  border-radius: 12px;
  padding: 6px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid #eee;
}

.custom-dropdown .el-dropdown-menu__item {
  border-radius: 8px;
  padding: 10px 14px;
  font-weight: 500;
}

.custom-dropdown .el-dropdown-menu__item:hover {
  background: #f3f1ff;
  color: #7872b9;
}
</style>
