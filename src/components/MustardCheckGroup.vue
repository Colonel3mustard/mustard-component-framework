<template>
  <fieldset class="checkGroup">
    <legend>{{ title }}</legend>
    <div class="checkContainer">
      <MustardCheck
        v-for="(check, index) in checks"
        :key="index"
        :label="check.label"
        :id="check.id"
        v-model="checked[index]"></MustardCheck>
    </div>
  </fieldset>
</template>

<script setup lang="ts">
import MustardCheck from './MustardCheck.vue';
interface Check {
  label: string;
  id: string;
}

interface Props {
  title?: string;
  checks?: Check[];
}
defineProps<Props>();

const checked = defineModel<boolean[]>({ required: true });
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
