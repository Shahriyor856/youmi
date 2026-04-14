<template>
  <div>
    <ModulesMaterialsMaterialsBlogCategories @select="handleSelect" />
    <ModulesMaterialsMaterialsBlogPopular @open="handleOpen" />
    <LazyModulesMaterialsMaterialsBlogCtaBanner @find="handleFind" />
  </div>
</template>
<script setup>
const handleSelect = (category) => {
  // handle category selection
};

const handleOpen = (article) => {
  // handle article open
};

const handleFind = () => {
  // handle find psychologist
};
</script>
