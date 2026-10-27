<script setup>
defineProps({
  cat: Object,
});

const emit = defineEmits(["adopt"]);
</script>

<template>
  <li>
    {{ cat.name }}
    <span v-if="cat.adopted">(adopted)</span>
    <button @click="emit('adopt', cat.id)">Adopt</button>
  </li>
</template>
