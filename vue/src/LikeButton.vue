<script setup>
import { ref } from "vue";

const likes = ref(0);

function addLike() {
  likes.value++;
}
</script>

<template>
  <button @click="addLike">Like ({{ likes }})</button>
</template>
