<template>
  <div class="container-main main-padding flex flex-col gap-10 md:gap-16 lg:gap-20">

    <h1 class="main-purple-text text-2xl md:text-3xl lg:text-4xl text-center">
      {{ title }}
    </h1>

    <div class="faq-collapse">
      <el-collapse v-model="localActiveNames" @change="handleChange">
        <el-collapse-item
          v-for="item in faqList"
          :key="item.name"
          :name="item.name"
          :title="item.title"
        >
          <p class="main-grey-text text-sm md:text-base">
            {{ item.content }}
          </p>
        </el-collapse-item>
      </el-collapse>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import type { CollapseModelValue } from "element-plus";

type FaqItem = {
  name: string;
  title: string;
  content: string;
};

const props = defineProps<{
  title: string;
  faqList: FaqItem[];
  modelValue: CollapseModelValue;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: CollapseModelValue): void;
}>();

const localActiveNames = ref(props.modelValue);

watch(
  () => props.modelValue,
  (val) => { localActiveNames.value = val; },
);

const handleChange = (val: CollapseModelValue) => {
  emit("update:modelValue", val);
};
</script>

<style scoped>
.faq-collapse :deep(.el-collapse) {
  border: none;
  display: flex;
  flex-direction: column;
  gap: 12px; /* tighter on mobile */
}

/* From md up, restore original gap */
@media (min-width: 768px) {
  .faq-collapse :deep(.el-collapse) {
    gap: 20px;
  }
}

.faq-collapse :deep(.el-collapse-item) {
  background-color: #ebf5ff;
  border-radius: 16px;
  padding: 4px 14px; /* tighter on mobile */
  border: none;
}

@media (min-width: 768px) {
  .faq-collapse :deep(.el-collapse-item) {
    padding: 8px 20px;
  }
}

.faq-collapse :deep(.el-collapse-item__header),
.faq-collapse :deep(.el-collapse-item__wrap) {
  background-color: transparent;
  border: none;
}

.faq-collapse :deep(.el-collapse-item__header) {
  font-size: 14px;
  font-weight: 500;
  color: #2c2c2c;
  padding: 14px 0;
  line-height: 1.4;
}

@media (min-width: 768px) {
  .faq-collapse :deep(.el-collapse-item__header) {
    font-size: 15px;
    padding: 16px 0;
  }
}

.faq-collapse :deep(.el-collapse-item__arrow) {
  display: none;
}

.faq-collapse :deep(.el-collapse-item__header)::after {
  content: "+";
  font-size: 28px; /* smaller on mobile */
  color: #f5a623;
  margin-left: auto;
  font-weight: 300;
  flex-shrink: 0;
}

@media (min-width: 768px) {
  .faq-collapse :deep(.el-collapse-item__header)::after {
    font-size: 40px;
  }
}

.faq-collapse :deep(.el-collapse-item.is-active .el-collapse-item__header)::after {
  content: "−";
}

.faq-collapse :deep(.el-collapse-item__content) {
  padding-bottom: 14px;
  background-color: transparent;
  border: none;
}

@media (min-width: 768px) {
  .faq-collapse :deep(.el-collapse-item__content) {
    padding-bottom: 16px;
  }
}
</style>