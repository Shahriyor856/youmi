<template>
  <div class="container-main pt-20">
    <h1 class="main-purple-text text-center">Ждем от вас</h1>
  </div>
  <ModulesMainPageFourTable :rows="doctorRows" />
</template>

<script setup lang="ts">
import book from "@/assets/images/book.svg";
import tick from "@/assets/images/check mark.svg";

// ── ROWS FOR THE DOCTORS PAGE ──────────────────────────────────────────────
// We pass 3 rows to match Image 2's layout exactly.
// The component doesn't need to know or care — it just loops.

const doctorRows = [
  // ── Row 1: one wide card (Документы) ─────────────────────────────────────
  [
    {
      image: book,
      title: "Документы",
      text: "подтверждающие дополнительное образование в определенном направлении психотерапии. Мы рассматриваем только длительные программы обучения, около 500 часов.",
    },
  ],

  // ── Row 2: three small cards side by side ────────────────────────────────
  // These were completely missing from your original page script!
  // No image provided → each card gets the spacer div.
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

  // ── Row 3: one wide card (Подтвержденный опыт) ───────────────────────────
  [
    {
      image: tick,
      title: "Подтвержденный опыт работы",
      text: "не менее 3-х лет. Учитывается только опыт консультирования за оплату и не в рамках учебной программы. сультирования за оплату и не в рамках учебной программы",
    },
  ],
];
</script>
