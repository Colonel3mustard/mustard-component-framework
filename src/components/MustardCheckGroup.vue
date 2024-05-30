<template>
  <fieldset class="checkGroup">
    <legend>{{ title }}</legend>
    <div class="checkContainer">
      <MustardCheck v-for="(label, index) in labels" :key="index">{{ label }}</MustardCheck>
    </div>
  </fieldset>
</template>

<script setup lang="ts">
import MustardCheck from './MustardCheck.vue';
interface Props {
  title?: string;
  labels?: string[];
}
defineProps<Props>();
</script>

<style scoped>
.checkGroup {
  border: 3px solid #003566;
  border-radius: 20px;
  font-family: 'Comfortaa', sans-serif;
  font-weight: 400;
  font-size: 18px;
  height: fit-content;
  transition: all 200ms linear;
  width: fit-content;
  color: #003566;
  cursor: pointer;
}

.checkContainer {
  display: flex;
  flex-direction: column;
  align-items: start;
}
</style>
