<template>
  <UiHeaderUI
    :image-src="image"
    :show-title="false"
    :show-price="false"
    :show-button="false"
    tagline="В YouMi вы не одни Вместе мы справимся"
  />
  <div class="flex items-center justify-center py-52">
    <h1 class="example">About Vue</h1>
  </div>
</template>

<script setup lang="ts">
import image from "@/assets/images/person.svg";
</script>
