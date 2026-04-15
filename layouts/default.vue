<script setup lang="ts">
import AppFooter from "~/components/layouts/AppFooter.vue";
import AppHeader from "~/components/layouts/AppHeader.vue";

const route = useRoute() as any;

const HIDE_HEADER_ROUTES = ["/header/profile"];
const showHeader = computed(
  () => !HIDE_HEADER_ROUTES.includes(route.path as string),
);
</script>

<template>
  <div>
    <AppHeader v-if="showHeader" />

    <main>
      <slot />
    </main>

    <AppFooter />
  </div>
</template>
