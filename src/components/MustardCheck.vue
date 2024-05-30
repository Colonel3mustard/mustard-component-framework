<template>
  <div class="container">
    <input type="checkbox" :id="label" :name="label" />
    <i v-show="checked" class="fa-solid fa-square-check" @click="click()"></i>
    <i v-show="!checked" class="fa-regular fa-square" @click="click()"></i>
    <label :for="label" @click="click()">{{ label }}</label>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  label: string;
}
defineProps<Props>();
const emit = defineEmits<{
  (e: 'click', value: boolean): void;
}>();

const checked = ref(false);

function click() {
  checked.value = !checked.value;
  emit('click', checked.value);
}
</script>

<style scoped>
.container {
  position: relative;
  font-family: 'Comfortaa', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.25;
  height: 50px;
  transition: all 200ms linear;
  width: fit-content;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #003566;
  cursor: pointer;
}

.container label {
  cursor: pointer;
  margin-left: 10px;
}

.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
</style>
