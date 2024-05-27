<template>
  <div>
    <MustardBtn @click="btnClick()" :loading="loading"> {{ testButton }}</MustardBtn>
    <MustardDdn :items="items" :title="title"></MustardDdn>
    <MustardInput :label="label" :placeholder="placeholder" :type="type"></MustardInput>
    <MustardCheck>{{ 'check1' }}</MustardCheck>
    <MustardCheckGroup :labels="['check2', 'check3']" title="Check Group Test"></MustardCheckGroup>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MustardBtn from './components/MustardBtn.vue';
import MustardCheck from './components/MustardCheck.vue';
import MustardCheckGroup from './components/MustardCheckGroup.vue';
import MustardDdn from './components/MustardDdn.vue';
import MustardInput from './components/MustardInput.vue';

// Button Section
const testButton = 'Click me!';
const loading = ref(false);
function btnClick() {
  loading.value = !loading.value;
}

// Dropdown Section
const items = [
  { name: 'Home', link: '' },
  { name: 'About', link: '' },
  { name: 'Services', link: '' },
  { name: 'Contact', link: '' },
];
const title = 'Dropdown1';

// Input Section
const label = 'Email';
const placeholder = 'ex. mark@mustard.com';
const type = 'email';
</script>

<style scoped></style>
