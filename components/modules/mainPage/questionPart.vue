<template>
  <div class="container-main main-padding flex flex-col gap-20">
    <div>
      <h1 class="main-purple-text text-center">Вопросы - ответы</h1>
    </div>
    <div class="faq-collapse">
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item
          name="1"
          title="Эффективно ли работать с психологом онлайн?"
        >
          <p class="main-grey-text">
            Да, эффективно и уже является стандартной практикой во всем мире. За
            последние годы было проведено много научных исследований,
            доказывающих, что данный формат не уступает по эффективности
            традиционной очной психотерапии.
          </p>
        </el-collapse-item>
        <el-collapse-item name="2" title="Как выбрать специалиста?">
          <p class="main-grey-text">Ответ на вопрос...</p>
        </el-collapse-item>
        <el-collapse-item
          name="3"
          title="Чувствую, что мне нужна помощь, но не понимаю в чём проблема. Как быть?"
        >
          <p class="main-grey-text">Ответ на вопрос...</p>
        </el-collapse-item>
        <el-collapse-item name="4" title="Как вы отбираете психологов в базу?">
          <p class="main-grey-text">Ответ на вопрос...</p>
        </el-collapse-item>
        <el-collapse-item
          name="5"
          title="В чем разница между психологом, психотерапевтом и психиатром и как понять кто мне нужен?"
        >
          <p class="main-grey-text">Ответ на вопрос...</p>
        </el-collapse-item>
        <el-collapse-item
          name="6"
          title="Какое количество сессий мне необходимо, чтобы получить результат?"
        >
          <p class="main-grey-text">Ответ на вопрос...</p>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { CollapseModelValue } from "element-plus";

const activeNames = ref(["1"]);
const handleChange = (val: CollapseModelValue) => {
  console.log(val);
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
