<template>
  <div id="navBar">
    <h2 id="siteTitle">{{ title }}</h2>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <img v-if="item.image" :src="item.image" :href="item.link" />
        <a v-else :href="item.link">{{ item.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { NavItem } from '../types/Mustard';

interface Props {
  title: string;
  items: NavItem[];
}
defineProps<Props>();

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById('navBar')!.style.padding = '0px 10px';
    document.getElementById('siteTitle')!.style.fontSize = '34px';
  } else {
    document.getElementById('navBar')!.style.padding = '30px 10px';
    document.getElementById('siteTitle')!.style.fontSize = '38px';
  }
}
</script>

<style scoped>
#siteTitle {
  width: fit-content;
  color: #ffd60a;
  padding-left: 20px;
  margin: 0;
  align-self: center;
  font-family: 'Comfortaa', sans-serif;
  font-weight: 700;
  font-size: 38px;
  transition: 0.6s;
}

#navBar {
  position: fixed;
  display: inline-flex;
  justify-content: space-between;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99999;
  background-color: #003566;
  margin: 0;
  padding: 30px 10px;
  transition: 0.6s;
}

ul {
  list-style-type: none;
  height: 100%;
  align-self: center;
  margin: 0;
  padding-right: 10px;
}

li {
  float: right;
}

a {
  padding: 10px 0px;
  display: block;
  padding: 20px 30px;
  background-color: #003566;
  color: #ffd60a;
  font-family: 'Comfortaa', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 2;
  text-decoration: none;
}

a:hover {
  background-color: #ffd60a;
  color: #003566;
}
</style>
