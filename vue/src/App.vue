<script setup>
import { computed, ref } from "vue";
import CatCard from "./CatCard.vue";
import LikeButton from "./LikeButton.vue";

const cats = ref([
  {
    id: 1,
    name: "Tabby",
    adopted: false,
  },
  {
    id: 2,
    name: "Mochi",
    adopted: false,
  },
]);

const availableCount = computed(() => {
  return cats.value.filter((cat) => {
    return !cat.adopted;
  }).length;
});

function adopt(id) {
  const cat = cats.value.find((c) => {
    return c.id === id;
  });
  cat.adopted = true;
}
</script>

<template>
  <LikeButton />
  <h1>{{ availableCount }} cats available</h1>
  <ul>
    <CatCard v-for="cat in cats" :key="cat.id" :cat="cat" @adopt="adopt" />
  </ul>
</template>
