<template>
  <div style="margin-top: 200px !important">
    <MustardNavBar :items="navItems"></MustardNavBar>
    <MustardBtn @click="btnClick()" :loading="loading" :label="testButton"></MustardBtn>
    <MustardDdn :items="itemsDropdown" :title="title"></MustardDdn>
    <MustardInput :label="label" :placeholder="placeholder" :type="type || ''"></MustardInput>
    <MustardCheck :label="'check1'"></MustardCheck>
    <MustardCheckGroup :labels="['check2', 'check3']" title="Check Group Test"></MustardCheckGroup>

    <div class="cardList">
      <MustardCard
        v-for="(item, index) in items"
        :key="index"
        :item="item"
        class="card"></MustardCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MustardBtn from './components/MustardBtn.vue';
import MustardCard from './components/MustardCard.vue';
import MustardCheck from './components/MustardCheck.vue';
import MustardCheckGroup from './components/MustardCheckGroup.vue';
import MustardDdn from './components/MustardDdn.vue';
import MustardInput from './components/MustardInput.vue';
import MustardNavBar from './components/MustardNavBar.vue';
import { Card, NavItem } from './types/Mustard';

// Button Section
const testButton = 'Click me!';
const loading = ref(false);
function btnClick() {
  loading.value = !loading.value;
}

// Dropdown Section
const itemsDropdown = [
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

// Card Section
const items: Card[] = [
  { title: 'Greg Bennett', subtitle: '(626) 485-2957', imgSrc: getImage('./assets/Profile1.jpg') },
  { title: 'Ann Johnson', subtitle: '(513) 903-8042', imgSrc: getImage('./assets/Profile2.jpg') },
  { title: 'Amy Tanner', subtitle: '(513) 967-3951', imgSrc: getImage('./assets/Profile3.jpg') },
  { title: 'Jen Riley', subtitle: '(513) 339-9935', imgSrc: getImage('./assets/Profile4.jpg') },
  { title: 'Tom Jones', subtitle: '(513) 069-4886', imgSrc: getImage('./assets/Profile5.jpg') },
  { title: 'Greg Bennett', subtitle: '(626) 485-2957', imgSrc: getImage('./assets/Profile1.jpg') },
  { title: 'Ann Johnson', subtitle: '(513) 903-8042', imgSrc: getImage('./assets/Profile2.jpg') },
  { title: 'Amy Tanner', subtitle: '(513) 967-3951', imgSrc: getImage('./assets/Profile3.jpg') },
  { title: 'Jen Riley', subtitle: '(513) 339-9935', imgSrc: getImage('./assets/Profile4.jpg') },
  { title: 'Tom Jones', subtitle: '(513) 069-4886', imgSrc: getImage('./assets/Profile5.jpg') },
];
function getImage(imagePath: string) {
  return new URL(imagePath, import.meta.url).href;
}

// Nav Section
const navItems: NavItem[] = [
  { name: 'Home', link: '' },
  { name: 'News', link: '' },
  { name: 'Contact', link: '' },
  { name: 'About', link: '' },
];
</script>

<style scoped>
.cardList {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.card {
  width: 300px;
}
</style>
