<template>
  <input
    type="text"
    :value="modelValue"
    :placeholder="placeholder"
    class="w-full px-5 py-2 rounded-xl border-2 border-[#7872B9] outline-none focus:border-[#5a54a0] focus:ring-2 focus:ring-[#7872B9]/20 text-sm md:text-base text-gray-700 placeholder:text-gray-400 transition-colors duration-200"
    @input="
      $emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
  />
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    modelValue?: string;
    placeholder?: string;
  }>(),
  {
    modelValue: "",
    placeholder: "Введите промокод",
  },
);

defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();
</script>
