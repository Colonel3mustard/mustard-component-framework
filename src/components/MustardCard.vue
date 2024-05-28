<template>
  <div class="card">
    <img class="cardPic" :src="item.imgSrc" />
    <div class="cardContent">
      <h2 class="title">{{ item.title }}</h2>
      <h4 class="subtitle">{{ item.subtitle }}</h4>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  item: Card;
}
interface Card {
  title: string;
  subtitle: string;
  imgSrc: string;
}
defineProps<Props>();
</script>

<style scoped>
.card {
  border: 3px solid #003566;
  position: relative;
  line-height: 2;
  min-height: 60px;
  min-width: 60px;
  transition: all 200ms linear;
  border-radius: 20px;
  width: fit-content;
  display: inline-flex;
  align-items: left;
  justify-content: left;
  text-align: left;
  color: black;
  box-shadow: 0px 3px 0px lightgrey;
  background-color: white;
  padding: 10px;
  font-family: 'Roboto', sans-serif;
  color: #003566;
}

.cardContent {
  display: flex;
  flex-direction: column;
}

.cardPic {
  height: 80px;
  border-radius: 20px;
  border: 3px solid #003566;
}

.title {
  font-size: 24px;
  font-weight: 700;
  margin: 0px 5px 0px 10px;
}

.subtitle {
  font-size: 18px;
  font-weight: 500;
  margin: 0px 5px 0px 10px;
}
</style>
