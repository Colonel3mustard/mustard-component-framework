<template>
  <div class="selectContainer">
    <label :for="name">{{ name }}</label>

    <select :name="name" :id="name" v-model="model">
      <option v-for="(option, index) in options" :key="index" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { SelectOption } from '../types/Mustard';

interface Props {
  name: string;
  options: SelectOption[];
}

defineProps<Props>();

const model = defineModel<string>({ required: true });
</script>

<style scoped>
.selectContainer {
  font-family: 'Comfortaa', sans-serif;
  color: #003566;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-weight: 500;
  font-size: 18px;
}

select {
  background-color: #ffd60a;
  cursor: pointer;
  color: #003566;
  box-shadow: 0px 3px 0px lightgray;
  border: 3px solid #003566;
  font-weight: 500;
  font-size: 18px;
  line-height: 2;
  height: 44px;
  border-radius: 20px;
}

select:hover {
  background-color: #e0bc09;
}

option {
  position: relative;
  color: #003566;
  transition: all 200ms linear;
  font-family: 'Comfortaa', sans-serif;
  font-weight: 500;
  font-size: 15px;
  border-radius: 2px;
  padding: 5px 0;
  padding-left: 20px;
  padding-right: 15px;
  margin: 2px 0;
  text-align: left;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
