<template>
  <div style="margin-top: 200px !important">
    <MustardInput v-model="inputText" label="File" type="file" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MustardInput from './components/MustardInput.vue';

const inputText = ref('');
</script>

<style scoped></style>
