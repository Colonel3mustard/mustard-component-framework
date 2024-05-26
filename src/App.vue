<template>
  <div>
    <MustardBtn @click="btnClick()" :loading="loading"> {{ testButton }}</MustardBtn>
    <MustardDdn :items="items" :title="title"></MustardDdn>
    <MustardInput :label="label" type="email"></MustardInput>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MustardBtn from './components/MustardBtn.vue';
import MustardDdn from './components/MustardDdn.vue';
import MustardInput from './components/MustardInput.vue';
const testButton = 'Click me!';
const loading = ref(false);
const items = [
  { name: 'Home', link: '' },
  { name: 'About', link: '' },
  { name: 'Services', link: '' },
  { name: 'Contact', link: '' },
];
const title = 'Dropdown1';
const label = 'Email';

function btnClick() {
  loading.value = !loading.value;
}
</script>

<style scoped></style>
