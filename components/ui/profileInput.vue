<!-- components/ui/UiInput.vue -->
<script setup lang="ts">
defineProps<{
  modelValue?: string;
  label?: string;
  placeholder?: string;
  hint?: string;
  errorMessage?: string;
  suffix?: string;
  usePlaceholder?: boolean;
  hasIcon?: boolean;
  isError?: boolean;
  isSuccess?: boolean;
  isDisabled?: boolean;
  isRequired?: boolean;
}>();

defineEmits<{ "update:modelValue": [value: string] }>();
</script>

<template>
  <div class="flex flex-col gap-1.5">
    <label v-if="label" class="text-sm font-medium text-gray-800">
      {{ label }}
      <span v-if="isRequired" class="text-red-500 ml-0.5">*</span>
    </label>

    <div class="relative flex items-center">
      <span
        v-if="hasIcon"
        class="absolute left-2.5 w-4 h-4 text-gray-400 pointer-events-none"
      >
        <slot name="icon" />
      </span>

      <input
        :value="modelValue"
        :placeholder="usePlaceholder !== false ? placeholder : ''"
        :disabled="isDisabled"
        class="w-full h-10 px-3 text-sm rounded-lg border outline-none transition-all duration-150"
        :class="[
          hasIcon && 'pl-8',
          suffix && 'pr-10',
          isDisabled
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200'
            : isError
              ? 'border-red-400 focus:border-red-500 focus:ring-2 '
              : isSuccess
                ? 'border-green-400 focus:border-green-500 focus:ring-2 '
                : 'border-gray-300 hover:border-gray-400 focus:border-violet-400  ',
        ]"
        @input="
          $emit('update:modelValue', ($event.target as HTMLInputElement).value)
        "
      />

      <span
        v-if="suffix"
        class="absolute right-3 text-xs text-gray-400 pointer-events-none"
      >
        {{ suffix }}
      </span>
    </div>

    <span v-if="isError && errorMessage" class="text-xs text-red-500">{{
      errorMessage
    }}</span>
    <span v-else-if="hint" class="text-xs text-gray-400">{{ hint }}</span>
  </div>
</template>
