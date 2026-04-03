<template>
  <button
    class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-transform duration-150 hover:scale-105 active:scale-95 cursor-pointer"
    :class="
      filled
        ? 'bg-[#7872B9] text-white border border-[#7872B9] hover:bg-white hover:text-[#7872B9]'
        : 'bg-transparent text-[#7872B9] dark:text-[#7872B9] border  dark:border-[#7872B9] hover:text-white hover:bg-gray-100 dark:hover:bg-[#7872B9]'
    "
    :data-label="label"
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  filled?: boolean;
}>();
</script>
