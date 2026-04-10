<template>
  <div class="bg-[#F9FCFF]">
    <div class="container-main main-padding flex flex-col gap-28 items-center">
      <div class="flex justify-between">
        <div class="flex flex-col justify-start gap-10">
          <h1 class="main-purple-text">
            YouMi заботиться о вас даже вне сессий
          </h1>
          <p class="main-black-text">
            Работая с YouMi от 4 сессий мы дарим доступ к приложению
            с виртуальным психологом.
          </p>

          <div class="flex items-center gap-5">
            <img :src="tick" alt="image" class="w-8 h-8 object-contain" />
            <p class="main-grey-text">
              Прорабатывайте себя с помощью упражнений и аудиопрактик
            </p>
          </div>
          <div class="flex items-center gap-5">
            <img :src="tick" alt="image" class="w-8 h-8 object-contain" />
            <p class="main-grey-text">
              Прорабатывайте себя с помощью упражнений и аудиопрактик
            </p>
          </div>
          <div class="flex items-center gap-5">
            <img :src="tick" alt="image" class="w-8 h-8 object-contain" />
            <p class="main-grey-text">
              Прорабатывайте себя с помощью упражнений и аудиопрактик
            </p>
          </div>
          <div v-if="useButton">
            <BaseButton>Доступно в App Store</BaseButton>
          </div>
        </div>
        <div class="flex relative">
          <img
            :src="screenOne"
            alt="image"
            class="object-contain relative bottom-10 right-20"
          />
          <img :src="screenTwo" alt="image" class="object-contain absolute" />
        </div>
      </div>
      <div v-if="useButtonTwo">
        <BaseButton>Доступно в App Store</BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import tick from "@/assets/images/noun-check-mark-1295838 4.svg";
import screenOne from "@/assets/images/screen 1.svg";
import screenTwo from "@/assets/images/screen 2.svg";
import BaseButton from "~/components/ui/BaseButton.vue";

interface Props {
  useButton?: boolean;
  useButtonTwo?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  useButton: false,
  useButtonTwo: true,
});
</script>
