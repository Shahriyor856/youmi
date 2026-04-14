<template>
  <div class="container-main main-padding flex flex-col gap-20">
    <div>
      <h1 class="main-purple-text text-center">{{ title }}</h1>
    </div>

    <div class="faq-collapse">
      <el-collapse v-model="localActiveNames" @change="handleChange">
        <el-collapse-item
          v-for="item in faqList"
          :key="item.name"
          :name="item.name"
          :title="item.title"
        >
          <p class="main-grey-text">
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
  (val) => {
    localActiveNames.value = val;
  },
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
  gap: 20px;
}

.faq-collapse :deep(.el-collapse-item) {
  background-color: #ebf5ff; /* light blue background */
  border-radius: 16px;
  padding: 8px 20px;
  border: none;
}

/* Remove top/bottom borders */
.faq-collapse :deep(.el-collapse-item__header),
.faq-collapse :deep(.el-collapse-item__wrap) {
  background-color: transparent;
  border: none;
}

/* Header text style */
.faq-collapse :deep(.el-collapse-item__header) {
  font-size: 15px;
  font-weight: 500;
  color: #2c2c2c;
  padding: 16px 0;
  line-height: 1.4;
}

/* Replace arrow icon with +/- */
.faq-collapse :deep(.el-collapse-item__arrow) {
  display: none;
}

.faq-collapse :deep(.el-collapse-item__header)::after {
  content: "+";
  font-size: 40px;
  color: #f5a623; /* orange/yellow color */
  margin-left: auto;
  font-weight: 300;
  flex-shrink: 0;
}

.faq-collapse
  :deep(.el-collapse-item.is-active .el-collapse-item__header)::after {
  content: "−";
}

/* Content text */
.faq-collapse :deep(.el-collapse-item__content) {
  padding-bottom: 16px;
  background-color: transparent;
  border: none;
}
</style>
