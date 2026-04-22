<template>
  <div class="container-main pt-10 md:pt-16 lg:pt-20">
    <h1 class="main-purple-text text-center text-2xl md:text-3xl lg:text-4xl">
      Ждем от вас
    </h1>
  </div>

  <ModulesMainPageFourTable :cols="3" :rows="doctorRows" />
</template>

<script setup lang="ts">
import book from "@/assets/images/book.svg";
import tick from "@/assets/images/check mark.svg";

// ── ROWS FOR THE DOCTORS PAGE ──────────────────────────────────────────────
// We pass 3 rows to match Image 2's layout exactly.
// The component doesn't need to know or care — it just loops.

const doctorRows = [
  // Row 1: 1 card — sits alone, stretches full width in a 3-col grid
  [
    {
      image: book,
      title: "Документы",
      text: "подтверждающие дополнительное образование в определенном направлении психотерапии. Мы рассматриваем только длительные программы обучения, около 500 часов.",
    },
  ],
  // Row 2: 3 cards — fills all 3 columns exactly
  [
    {
      title: "Диплом",
      text: "об окончании профильного высшего учебного заведения.",
    },
    {
      title: "Прохождение",
      text: "супервизии от 20 часов в год.",
    },
    {
      title: "Прохождение",
      text: "личной терапии от 50 часов в год.",
    },
  ],
  // Row 3: 1 card — sits alone, stretches full width
  [
    {
      image: tick,
      title: "Подтвержденный опыт работы",
      text: "не менее 3-х лет. Учитывается только опыт консультирования за оплату и не в рамках учебной программы.",
    },
  ],
];
</script>
