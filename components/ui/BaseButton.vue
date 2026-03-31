<template>
  <button :class="buttonClass">
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: "primary",
  },
});

const buttonClass = computed(() => {
  const base =
    "px-10 py-2 rounded-xl transition active:translate-y-[2px] active:translate-x-[2px]";

  const variants = {
    primary: "bg-[#7872B9] text-white shadow-[8px_8px_0px_#B6C7E3]",
    outline: "bg-white border-2 border-[#7872B9] text-[#7872B9]",
  };

  return `${base} ${variants[props.variant]}`;
});
</script>

<!-- <template>
  <button :class="buttonClass">
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: "primary",
  },
})

const buttonClass = computed(() => {
  const base =
    "px-10 py-4 rounded-xl transition active:translate-y-[4px] active:translate-x-[4px]"

  const variants = {
    primary:
      "bg-[#7872B9] text-white shadow-[8px_8px_0px_#B6C7E3]",
    outline:
      "bg-white border border-[#7872B9] text-[#7872B9]",
  }

  return `${base} ${variants[props.variant]}`
})
</script> -->
