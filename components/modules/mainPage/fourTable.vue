<template>
  <!--
    OUTER WRAPPER
    Same container/padding/gap as before — nothing changes visually at the top level.
  -->
  <div class="container-main main-padding flex flex-col gap-10">
    <!-- ── TEXT BLOCK (unchanged) ── -->
    <div class="text-start flex flex-col gap-4">
      <p class="main-black-text max-w-screen-sm">{{ title }}</p>
      <h1 class="main-purple-text">{{ text }}</h1>
      <p class="main-grey-text max-w-screen-sm">{{ textTwo }}</p>
    </div>

    <!-- ── ROWS LOOP ──────────────────────────────────────────────────────────
      Instead of two hardcoded <div> blocks (one for `items`, one for `itemsTwo`),
      we now loop over a single `rows` array.
      Each element of `rows` is itself an array of card objects,
      so one v-for gives us any number of rows with any number of cards each.
    ─────────────────────────────────────────────────────────────────────────── -->
    <div class="flex flex-col gap-4">
      <div
        v-for="(row, rowIndex) in rows"
        :key="rowIndex"
        class="flex flex-auto gap-4"
      >
        <!-- ── CARD LOOP ────────────────────────────────────────────────────
          Each card in the row. The card template is written ONCE here —
          no more copy-pasted duplicate blocks.
        ──────────────────────────────────────────────────────────────────── -->
        <div
          v-for="(item, cardIndex) in row"
          :key="cardIndex"
          class="flex items-center gap-4 p-5 bg-[#EBF5FF] rounded-2xl flex-shrink-0]"
        >
          <!-- 
            NOTE: if you need the wide cards (Image 2) to truly fill the row,
            add `flex-1` here: class="flex-1 flex items-center ..."
            For the 50/50 split of Image 1 it also works because both cards
            get flex-1 and share the space equally.
         -->

          <!-- Image slot: show image if provided, otherwise reserve space -->
          <div v-if="item.image" class="w-28 h-28 shrink-0">
            <img
              :src="item.image"
              alt=""
              class="w-full h-full object-contain"
            />
          </div>
          <!-- Spacer keeps text alignment consistent when there's no image -->
          <div v-else class="w-10 h-28 shrink-0"></div>

          <!-- Text content -->
          <div class="flex flex-col gap-2">
            <h1 class="main-black-text">{{ item.title }}</h1>
            <p class="main-grey-text">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import book from "@/assets/images/book.svg";
import watch from "@/assets/images/watch.svg";

// ── TYPE ──────────────────────────────────────────────────────────────────────
// A single card's data shape (same as before).
interface CardItem {
  image?: string;
  title?: string;
  text?: string;
}

// ── PROPS ─────────────────────────────────────────────────────────────────────
// KEY CHANGE: instead of `items` + `itemsTwo` (always exactly 2 rows),
// we accept a single `rows` prop: an array of arrays.
// · rows[0] → first row of cards
// · rows[1] → second row of cards
// · rows[2] → third row of cards  ← this is what was impossible before
// The parent decides how many rows and how many cards per row.
const props = withDefaults(
  defineProps<{
    rows?: CardItem[][]; // ← the only structural prop that changed
    title?: string;
    text?: string;
    textTwo?: string;
  }>(),
  {
    // Default reproduces Image 1 exactly (2 rows × 2 cards):
    rows: () => [
      // Row 1
      [
        {
          image: book,
          title: "Образование",
          text: "Диплом о высшем психологическом образовании и дополнительные сертификаты",
        },
        {
          // No image → spacer div will render instead
          title: "Опыт работы",
          text: "Подтвержденный опыт работы не менее 3-х лет",
        },
      ],
      // Row 2
      [
        {
          title: "Обучение",
          text: "Прохождение супервизии от 20 часов в год",
        },
        {
          image: watch,
          title: "Личная терапия",
          text: "Прохождение личной терапии от 50 часов в год терапии от 50 часов в год",
        },
      ],
    ],
  },
);
</script>
