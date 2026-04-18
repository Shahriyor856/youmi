<template>
  <NuxtLink :to="link">
    <button :class="buttonClass">
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
    "px-20 py-2 rounded-xl transition active:translate-y-[2px] active:translate-x-[2px]";

  const variants = {
    primary: "bg-[#7872B9] text-white shadow-[8px_8px_0px_#B6C7E3]",
    outline: "bg-white border-2 border-[#7872B9] text-[#7872B9]",
  };

  return `${base} ${variants[props.variant]}`;
});
</script>
