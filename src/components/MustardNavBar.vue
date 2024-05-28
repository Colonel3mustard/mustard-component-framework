<template>
  <ul>
    <li v-for="(item, index) in items" :key="index">
      <img v-if="item.image" :src="item.image" :href="item.link" />
      <a v-else :href="item.link">{{ item.name }}</a>
    </li>
  </ul>
</template>

<script setup lang="ts">
interface NavItem {
  name: string;
  link: string;
  image?: string;
}
interface Props {
  items: NavItem[];
}
defineProps<Props>();
</script>

<style scoped>
ul {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99999;
}

li {
  float: left;
}

a {
  display: block;
  padding: 8px;
  background-color: #dddddd;
}
</style>
