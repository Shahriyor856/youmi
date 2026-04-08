<template>
  <div class="bg-[#F9FCFF]">
    <div class="container-main main-padding">
      <div class="mx-auto flex flex-col items-center">
        <h1 class="main-purple-text text-center">История проекта</h1>
        <div class="w-full flex items-center justify-between">
          <div class="w-40 h-40 shrink-0">
            <img
              :src="image"
              alt="image"
              class="w-full h-full object-contain"
            />
          </div>
          <div class="flex flex-col max-w-xl">
            <div class="flex flex-col">
              <p class="text-[#FACD6E] text-5xl font-bold text-start">"</p>
              <p class="">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae quisquam qui non aspernatur. Repudiandae illum error
                impedit reiciendis quam temporibus.
              </p>
              <p class="text-[#FACD6E] text-5xl font-bold text-end">"</p>

            </div>
            <div class="">
              <p class="text-[#7872B9] font-bold text-lg">
                Lorem ipsum dolor sit amet.
              </p>
              <p class="main-grey-text">Lorem ipsum dolor sit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import image from "@/assets/images/Mask group (1).svg";
</script>
