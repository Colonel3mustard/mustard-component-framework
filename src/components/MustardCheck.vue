<template>
  <div class="container">
    <input type="checkbox" :id="label" :name="label" v-model="checked" />
    <label :for="label" v-show="checked"
      ><i class="fa-solid fa-square-check" :for="label"></i
    ></label>
    <label :for="label" v-show="!checked"><i class="fa-regular fa-square"></i></label>
    <label :for="label">{{ label }}</label>
  </div>
</template>

<script setup lang="ts">
interface Props {
  label: string;
}
defineProps<Props>();

const checked = defineModel<boolean>({ required: true });
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
