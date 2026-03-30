<script setup lang="ts">
import AppFooter from "~/components/layouts/AppFooter.vue";
import AppHeader from "~/components/layouts/AppHeader.vue";
</script>

<template>
  <div>
    <AppHeader />

    <main>
      <slot />
    </main>

    <AppFooter />
  </div>
</template>
