<template>
  <NuxtLink :to="link">
    <button
      class="xl:px-20 lg:px-16 md:px-10 sm:px-6 px-2 xl:text-sm md:text-xs text-[8px]"
      :class="buttonClass"
    >
      <slot />
    </button>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    variant?: "primary" | "outline";
    link?: string;
  }>(),
  {
    variant: "primary",
  },
);

const buttonClass = computed(() => {
  const base =
    " py-2 rounded-xl transition active:translate-y-[2px] active:translate-x-[2px]";

  const variants = {
    primary: "bg-[#7872B9] text-white shadow-[8px_8px_0px_#B6C7E3]",
    outline:
      "bg-white xl:border-2  md:border-1 border border-[#7872B9] text-[#7872B9]",
  };

  return `${base} ${variants[props.variant]}`;
});
</script>
