<template>
  <div class="container">
    <input type="checkbox" :id="label" :name="label" />
    <i v-show="checked" class="fa-solid fa-square-check" @click="checkClick()"></i>
    <i v-show="!checked" class="fa-regular fa-square" @click="checkClick()"></i>
    <label :for="label" @click="checkClick()"><slot></slot></label>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  label?: string;
}
defineProps<Props>();

const checked = ref(false);

function checkClick() {
  checked.value = !checked.value;
}
</script>

<style scoped>
.container {
  position: relative;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
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
